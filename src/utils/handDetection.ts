// ============================================
// Hand Detection Utilities
// Optimized for all palm sizes including kids' hands
// ============================================

import type { Hand, Position, FingerName } from '../types';
import { FINGER_TIP_IDS, FINGER_PIP_IDS } from '../constants';

// ============================================
// Landmark Smoothing for Stability
// ============================================

// Store previous landmark positions for smoothing
const landmarkHistory: Map<string, Position[]> = new Map();
const SMOOTHING_FRAMES = 3; // Number of frames to average

/**
 * Smooth a position using exponential moving average
 */
function smoothPosition(key: string, newPos: Position): Position {
  const history = landmarkHistory.get(key) || [];
  history.push(newPos);
  
  // Keep only last N frames
  while (history.length > SMOOTHING_FRAMES) {
    history.shift();
  }
  landmarkHistory.set(key, history);
  
  // Calculate weighted average (more recent = more weight)
  let totalWeight = 0;
  let smoothX = 0;
  let smoothY = 0;
  
  history.forEach((pos, index) => {
    const weight = index + 1; // Later frames have more weight
    smoothX += pos.x * weight;
    smoothY += pos.y * weight;
    totalWeight += weight;
  });
  
  return {
    x: smoothX / totalWeight,
    y: smoothY / totalWeight,
  };
}

/**
 * Calculate palm size for adaptive thresholds
 * Uses distance between wrist and middle finger MCP as reference
 */
function calculatePalmSize(landmarks: { x: number; y: number; z: number }[]): number {
  const wrist = landmarks[0];
  const middleMCP = landmarks[9];
  
  return Math.sqrt(
    Math.pow(middleMCP.x - wrist.x, 2) + 
    Math.pow(middleMCP.y - wrist.y, 2)
  );
}

/**
 * Get adaptive threshold based on palm size
 * Smaller palms get proportionally smaller thresholds
 */
function getAdaptiveThreshold(palmSize: number, baseThreshold: number): number {
  // Reference palm size (typical adult hand)
  const referencePalmSize = 0.25;
  
  // Scale threshold based on palm size ratio
  const scaleFactor = palmSize / referencePalmSize;
  
  // Clamp to reasonable range (0.5x to 1.5x base threshold)
  const clampedScale = Math.max(0.5, Math.min(1.5, scaleFactor));
  
  return baseThreshold * clampedScale;
}

/**
 * Detect which fingers are raised for a hand
 * Uses adaptive thresholds based on palm size for better accuracy with all hand sizes
 * @param hand - Detected hand object
 * @returns Array of boolean values for each finger (thumb, index, middle, ring, pinky)
 */
export function detectRaisedFingers(hand: Hand): boolean[] {
  const landmarks = hand.landmarks;
  const raised: boolean[] = [];
  
  // Calculate palm size for adaptive thresholds
  const palmSize = calculatePalmSize(landmarks);
  
  // ============================================
  // THUMB DETECTION - Adaptive for all hand sizes
  // ============================================
  
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
  
  // ---- Check 1: Thumb extension (normalized by palm size) ----
  const cmcToTip = Math.sqrt(
    Math.pow(thumbTip.x - thumbCMC.x, 2) + 
    Math.pow(thumbTip.y - thumbCMC.y, 2)
  );
  const cmcToMCP = Math.sqrt(
    Math.pow(thumbMCP.x - thumbCMC.x, 2) + 
    Math.pow(thumbMCP.y - thumbCMC.y, 2)
  );
  
  // Adaptive threshold based on palm size
  const extensionRatio = cmcToTip / (cmcToMCP + 0.001);
  const isFullyExtended = extensionRatio > 1.8; // Slightly lower for small hands
  
  // ---- Check 2: Thumb pointing away from palm ----
  const tipToPalm = Math.sqrt(
    Math.pow(thumbTip.x - palmCenterX, 2) + 
    Math.pow(thumbTip.y - palmCenterY, 2)
  );
  const cmcToPalm = Math.sqrt(
    Math.pow(thumbCMC.x - palmCenterX, 2) + 
    Math.pow(thumbCMC.y - palmCenterY, 2)
  );
  
  const isPointingAway = tipToPalm > cmcToPalm * 1.2; // Slightly lower threshold
  
  // ---- Check 3: Thumb angle (IP joint not too bent) ----
  const ipToMcpX = thumbMCP.x - thumbIP.x;
  const ipToMcpY = thumbMCP.y - thumbIP.y;
  const ipToTipX = thumbTip.x - thumbIP.x;
  const ipToTipY = thumbTip.y - thumbIP.y;
  
  const dotProduct = ipToMcpX * ipToTipX + ipToMcpY * ipToTipY;
  const magMcp = Math.sqrt(ipToMcpX * ipToMcpX + ipToMcpY * ipToMcpY);
  const magTip = Math.sqrt(ipToTipX * ipToTipX + ipToTipY * ipToTipY);
  
  const cosAngle = dotProduct / (magMcp * magTip + 0.001);
  const isStraight = cosAngle < -0.2; // More lenient angle check
  
  // ---- Check 4: Distance from tip to index finger base ----
  const tipToIndexMCP = Math.sqrt(
    Math.pow(thumbTip.x - indexMCP.x, 2) + 
    Math.pow(thumbTip.y - indexMCP.y, 2)
  );
  const mcpToIndexMCP = Math.sqrt(
    Math.pow(thumbMCP.x - indexMCP.x, 2) + 
    Math.pow(thumbMCP.y - indexMCP.y, 2)
  );
  const isAwayFromIndex = tipToIndexMCP > mcpToIndexMCP * 0.85; // Slightly lower
  
  // ---- Check 5: Horizontal thumb extension (works well for kids) ----
  // For smaller hands, check if thumb tip is horizontally away from palm
  const horizontalExtension = Math.abs(thumbTip.x - thumbCMC.x);
  const verticalPalmSize = Math.abs(indexMCP.y - wrist.y);
  const hasHorizontalExtension = horizontalExtension > verticalPalmSize * 0.3;
  
  // Final Decision: Require at least 3 of 5 checks to pass
  const thumbChecks = [isFullyExtended, isPointingAway, isStraight, isAwayFromIndex, hasHorizontalExtension];
  const passedChecks = thumbChecks.filter(Boolean).length;
  raised.push(passedChecks >= 3);

  // ============================================
  // OTHER FINGERS - Adaptive thresholds
  // ============================================
  
  // Base threshold, scaled by palm size
  const baseThreshold = 0.015;
  const adaptiveThreshold = getAdaptiveThreshold(palmSize, baseThreshold);
  
  for (let i = 1; i < 5; i++) {
    const tipY = landmarks[FINGER_TIP_IDS[i]].y;
    const pipY = landmarks[FINGER_PIP_IDS[i]].y;
    const mcpY = landmarks[FINGER_PIP_IDS[i] - 1].y; // MCP is one index before PIP
    
    // Primary check: tip above PIP
    const tipAbovePIP = tipY < pipY - adaptiveThreshold;
    
    // Secondary check: tip significantly above MCP (for more reliability)
    const tipAboveMCP = tipY < mcpY;
    
    // Tertiary check: PIP to tip distance vs MCP to PIP distance
    // When finger is raised, tip-to-PIP distance is similar to or greater than MCP-to-PIP
    const tipToPipDist = Math.abs(tipY - pipY);
    const mcpToPipDist = Math.abs(mcpY - pipY);
    const hasGoodExtension = tipToPipDist > mcpToPipDist * 0.5;
    
    // Finger is raised if primary check passes, or both secondary and tertiary pass
    const isRaised = tipAbovePIP || (tipAboveMCP && hasGoodExtension);
    raised.push(isRaised);
  }

  return raised;
}

/**
 * Get fingertip position on canvas with optional smoothing
 * @param hand - Detected hand object
 * @param fingerIndex - Index of finger (0-4)
 * @param canvasWidth - Canvas width
 * @param canvasHeight - Canvas height
 * @param smooth - Whether to apply smoothing (default: true)
 * @returns Position object with x, y coordinates
 */
export function getFingertipPosition(
  hand: Hand,
  fingerIndex: number,
  canvasWidth: number,
  canvasHeight: number,
  smooth: boolean = true
): Position {
  const landmark = hand.landmarks[FINGER_TIP_IDS[fingerIndex]];
  const rawPos = {
    // Mirror x coordinate for camera view (video is displayed mirrored)
    x: (1 - landmark.x) * canvasWidth,
    y: landmark.y * canvasHeight,
  };
  
  if (smooth) {
    const key = `${hand.handedness}_finger_${fingerIndex}`;
    return smoothPosition(key, rawPos);
  }
  
  return rawPos;
}

/**
 * Get landmark position on canvas with optional smoothing
 * @param hand - Detected hand object
 * @param landmarkIndex - Index of landmark
 * @param canvasWidth - Canvas width
 * @param canvasHeight - Canvas height
 * @param smooth - Whether to apply smoothing (default: true)
 * @returns Position object with x, y coordinates
 */
export function getLandmarkPosition(
  hand: Hand,
  landmarkIndex: number,
  canvasWidth: number,
  canvasHeight: number,
  smooth: boolean = true
): Position {
  const landmark = hand.landmarks[landmarkIndex];
  const rawPos = {
    x: (1 - landmark.x) * canvasWidth,
    y: landmark.y * canvasHeight,
  };
  
  if (smooth) {
    const key = `${hand.handedness}_landmark_${landmarkIndex}`;
    return smoothPosition(key, rawPos);
  }
  
  return rawPos;
}

/**
 * Get the hand side for note mapping
 * @param hand - Detected hand object
 * @returns 'left' or 'right' representing the user's actual hand
 */
export function getRealHandSide(hand: Hand): 'left' | 'right' {
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

/**
 * Clear landmark history (useful when switching hands or resetting)
 */
export function clearLandmarkHistory(): void {
  landmarkHistory.clear();
}
