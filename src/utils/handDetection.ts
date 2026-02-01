// ============================================
// Hand Detection Utilities
// ============================================

import type { Hand, Position, FingerName } from '../types';
import { FINGER_TIP_IDS, FINGER_PIP_IDS, UI_CONFIG } from '../constants';

/**
 * Detect which fingers are raised for a hand
 * @param hand - Detected hand object
 * @returns Array of boolean values for each finger (thumb, index, middle, ring, pinky)
 */
export function detectRaisedFingers(hand: Hand): boolean[] {
  const landmarks = hand.landmarks;
  const threshold = UI_CONFIG.fingerThreshold;
  const raised: boolean[] = [];

  // ============================================
  // THUMB DETECTION - Requires FULL thumb extension
  // ============================================
  // The user needs to fully extend/raise the entire thumb to trigger.
  // This prevents accidental triggers from slight thumb movements.
  // 
  // MediaPipe hand landmarks for thumb:
  // - 1: CMC (carpometacarpal - base of thumb at wrist)
  // - 2: MCP (metacarpophalangeal - knuckle)  
  // - 3: IP (interphalangeal - middle joint)
  // - 4: TIP (fingertip)
  //
  // For full extension we check:
  // 1. The thumb is straightened (tip far from CMC along the thumb axis)
  // 2. The thumb is pointing away from the palm
  // 3. The angle at IP joint is relatively straight (not curled)
  
  const thumbTip = landmarks[4];   // Thumb tip
  const thumbIP = landmarks[3];    // Thumb IP joint  
  const thumbMCP = landmarks[2];   // Thumb MCP (knuckle)
  const thumbCMC = landmarks[1];   // Thumb CMC (base at wrist)
  const indexMCP = landmarks[5];   // Index finger MCP
  const pinkyMCP = landmarks[17];  // Pinky MCP (for palm reference)
  const wrist = landmarks[0];      // Wrist
  
  // Calculate palm center for reference
  const palmCenterX = (indexMCP.x + pinkyMCP.x + wrist.x) / 3;
  const palmCenterY = (indexMCP.y + pinkyMCP.y + wrist.y) / 3;
  
  // ---- Check 1: Thumb extension (is the thumb straightened out?) ----
  // Measure the total length from CMC to tip vs CMC to MCP
  // A fully extended thumb will have tip much further than MCP
  const cmcToTip = Math.sqrt(
    Math.pow(thumbTip.x - thumbCMC.x, 2) + 
    Math.pow(thumbTip.y - thumbCMC.y, 2)
  );
  const cmcToMCP = Math.sqrt(
    Math.pow(thumbMCP.x - thumbCMC.x, 2) + 
    Math.pow(thumbMCP.y - thumbCMC.y, 2)
  );
  
  // For a fully extended thumb, tip should be significantly further than MCP
  // Ratio should be high (thumb is stretched out)
  const extensionRatio = cmcToTip / (cmcToMCP + 0.001); // Avoid division by zero
  const isFullyExtended = extensionRatio > 2.0; // Tip should be at least 2x further than MCP
  
  // ---- Check 2: Thumb pointing away from palm ----
  // Calculate distance from thumb tip to palm center vs thumb CMC to palm center
  const tipToPalm = Math.sqrt(
    Math.pow(thumbTip.x - palmCenterX, 2) + 
    Math.pow(thumbTip.y - palmCenterY, 2)
  );
  const cmcToPalm = Math.sqrt(
    Math.pow(thumbCMC.x - palmCenterX, 2) + 
    Math.pow(thumbCMC.y - palmCenterY, 2)
  );
  
  // When thumb is raised, tip is further from palm center than CMC
  const isPointingAway = tipToPalm > cmcToPalm * 1.3;
  
  // ---- Check 3: Thumb angle (IP joint not too bent) ----
  // Calculate the angle at the IP joint
  // Vector from IP to MCP
  const ipToMcpX = thumbMCP.x - thumbIP.x;
  const ipToMcpY = thumbMCP.y - thumbIP.y;
  // Vector from IP to Tip
  const ipToTipX = thumbTip.x - thumbIP.x;
  const ipToTipY = thumbTip.y - thumbIP.y;
  
  // Dot product to find angle
  const dotProduct = ipToMcpX * ipToTipX + ipToMcpY * ipToTipY;
  const magMcp = Math.sqrt(ipToMcpX * ipToMcpX + ipToMcpY * ipToMcpY);
  const magTip = Math.sqrt(ipToTipX * ipToTipX + ipToTipY * ipToTipY);
  
  // Cosine of angle - closer to -1 means straighter (180 degrees)
  const cosAngle = dotProduct / (magMcp * magTip + 0.001);
  const isStraight = cosAngle < -0.3; // Angle > ~110 degrees (relatively straight)
  
  // ---- Check 4: Distance from tip to index finger base ----
  // Classic check - thumb tip should be far from index MCP when raised
  const tipToIndexMCP = Math.sqrt(
    Math.pow(thumbTip.x - indexMCP.x, 2) + 
    Math.pow(thumbTip.y - indexMCP.y, 2)
  );
  const mcpToIndexMCP = Math.sqrt(
    Math.pow(thumbMCP.x - indexMCP.x, 2) + 
    Math.pow(thumbMCP.y - indexMCP.y, 2)
  );
  const isAwayFromIndex = tipToIndexMCP > mcpToIndexMCP * 0.9;
  
  // ---- Final Decision: Require multiple conditions for FULL thumb extension ----
  // At least 3 of 4 checks must pass for thumb to be considered raised
  const thumbChecks = [isFullyExtended, isPointingAway, isStraight, isAwayFromIndex];
  const passedChecks = thumbChecks.filter(Boolean).length;
  raised.push(passedChecks >= 3);

  // ============================================
  // OTHER FINGERS (index, middle, ring, pinky)
  // ============================================
  // These are simpler - check y position (tip should be above PIP joint when raised)
  // Y increases downward in normalized coordinates, so raised finger has lower y
  for (let i = 1; i < 5; i++) {
    const tipY = landmarks[FINGER_TIP_IDS[i]].y;
    const pipY = landmarks[FINGER_PIP_IDS[i]].y;
    raised.push(tipY < pipY - threshold);
  }

  return raised;
}

/**
 * Get fingertip position on canvas
 * @param hand - Detected hand object
 * @param fingerIndex - Index of finger (0-4)
 * @param canvasWidth - Canvas width
 * @param canvasHeight - Canvas height
 * @returns Position object with x, y coordinates
 */
export function getFingertipPosition(
  hand: Hand,
  fingerIndex: number,
  canvasWidth: number,
  canvasHeight: number
): Position {
  const landmark = hand.landmarks[FINGER_TIP_IDS[fingerIndex]];
  return {
    // Mirror x coordinate for camera view (video is displayed mirrored)
    x: (1 - landmark.x) * canvasWidth,
    y: landmark.y * canvasHeight,
  };
}

/**
 * Get landmark position on canvas
 * @param hand - Detected hand object
 * @param landmarkIndex - Index of landmark
 * @param canvasWidth - Canvas width
 * @param canvasHeight - Canvas height
 * @returns Position object with x, y coordinates
 */
export function getLandmarkPosition(
  hand: Hand,
  landmarkIndex: number,
  canvasWidth: number,
  canvasHeight: number
): Position {
  const landmark = hand.landmarks[landmarkIndex];
  return {
    x: (1 - landmark.x) * canvasWidth,
    y: landmark.y * canvasHeight,
  };
}

/**
 * Get the hand side for note mapping
 * MediaPipe's handedness label indicates which hand it actually is from the user's perspective
 * "Right" = user's right hand, "Left" = user's left hand
 * We want the user's left hand to play "left" notes and right hand to play "right" notes
 * @param hand - Detected hand object
 * @returns 'left' or 'right' representing the user's actual hand
 */
export function getRealHandSide(hand: Hand): 'left' | 'right' {
  // Return the hand as-is - MediaPipe correctly identifies which hand it is
  // "Left" from MediaPipe = user's left hand = should play left hand notes
  // "Right" from MediaPipe = user's right hand = should play right hand notes
  return hand.handedness === 'Left' ? 'left' : 'right';
}

/**
 * Create a unique key for a finger
 * @param handSide - 'left' or 'right'
 * @param fingerName - Name of the finger
 * @returns Unique key string
 */
export function createFingerKey(handSide: 'left' | 'right', fingerName: FingerName): string {
  return `${handSide}_${fingerName}`;
}

/**
 * Parse a finger key back to components
 * @param key - Finger key string
 * @returns Object with handSide and fingerName
 */
export function parseFingerKey(key: string): { handSide: 'left' | 'right'; fingerName: FingerName } {
  const [handSide, fingerName] = key.split('_') as ['left' | 'right', FingerName];
  return { handSide, fingerName };
}

/**
 * Calculate distance between two points
 * @param p1 - First position
 * @param p2 - Second position
 * @returns Distance in pixels
 */
export function calculateDistance(p1: Position, p2: Position): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Check if a point is within bounds
 * @param pos - Position to check
 * @param width - Bounds width
 * @param height - Bounds height
 * @returns True if within bounds
 */
export function isWithinBounds(pos: Position, width: number, height: number): boolean {
  return pos.x >= 0 && pos.x <= width && pos.y >= 0 && pos.y <= height;
}
