import type { Hand, Position, FingerName } from '../types';
import { FINGER_TIP_IDS, FINGER_PIP_IDS } from '../constants';
const landmarkHistory: Map<string, Position[]> = new Map();
const SMOOTHING_FRAMES = 3;
function smoothPosition(key: string, newPos: Position): Position {
    const history = landmarkHistory.get(key) || [];
    history.push(newPos);
    while (history.length > SMOOTHING_FRAMES) {
        history.shift();
    }
    landmarkHistory.set(key, history);
    let totalWeight = 0;
    let smoothX = 0;
    let smoothY = 0;
    history.forEach((pos, index) => {
        const weight = index + 1;
        smoothX += pos.x * weight;
        smoothY += pos.y * weight;
        totalWeight += weight;
    });
    return {
        x: smoothX / totalWeight,
        y: smoothY / totalWeight,
    };
}
function calculatePalmSize(landmarks: {
    x: number;
    y: number;
    z: number;
}[]): number {
    const wrist = landmarks[0];
    const middleMCP = landmarks[9];
    return Math.sqrt(Math.pow(middleMCP.x - wrist.x, 2) +
        Math.pow(middleMCP.y - wrist.y, 2));
}
export function getPalmSize(hand: Hand): number {
    return calculatePalmSize(hand.landmarks);
}
export function detectRaisedFingers(hand: Hand): boolean[] {
    const landmarks = hand.landmarks;
    const raised: boolean[] = [];
    const palmSize = calculatePalmSize(landmarks);
    const thumbTip = landmarks[4];
    const thumbIP = landmarks[3];
    const thumbMCP = landmarks[2];
    const thumbCMC = landmarks[1];
    const indexMCP = landmarks[5];
    const pinkyMCP = landmarks[17];
    const wrist = landmarks[0];
    const palmCenterX = (indexMCP.x + pinkyMCP.x + wrist.x) / 3;
    const palmCenterY = (indexMCP.y + pinkyMCP.y + wrist.y) / 3;
    const cmcToTip = Math.sqrt(Math.pow(thumbTip.x - thumbCMC.x, 2) +
        Math.pow(thumbTip.y - thumbCMC.y, 2));
    const cmcToMCP = Math.sqrt(Math.pow(thumbMCP.x - thumbCMC.x, 2) +
        Math.pow(thumbMCP.y - thumbCMC.y, 2));
    const extensionRatio = cmcToTip / (cmcToMCP + 0.001);
    const isFullyExtended = extensionRatio > 1.8;
    const tipToPalm = Math.sqrt(Math.pow(thumbTip.x - palmCenterX, 2) +
        Math.pow(thumbTip.y - palmCenterY, 2));
    const cmcToPalm = Math.sqrt(Math.pow(thumbCMC.x - palmCenterX, 2) +
        Math.pow(thumbCMC.y - palmCenterY, 2));
    const isPointingAway = tipToPalm > cmcToPalm * 1.2;
    const ipToMcpX = thumbMCP.x - thumbIP.x;
    const ipToMcpY = thumbMCP.y - thumbIP.y;
    const ipToTipX = thumbTip.x - thumbIP.x;
    const ipToTipY = thumbTip.y - thumbIP.y;
    const dotProduct = ipToMcpX * ipToTipX + ipToMcpY * ipToTipY;
    const magMcp = Math.sqrt(ipToMcpX * ipToMcpX + ipToMcpY * ipToMcpY);
    const magTip = Math.sqrt(ipToTipX * ipToTipX + ipToTipY * ipToTipY);
    const cosAngle = dotProduct / (magMcp * magTip + 0.001);
    const isStraight = cosAngle < -0.2;
    const tipToIndexMCP = Math.sqrt(Math.pow(thumbTip.x - indexMCP.x, 2) +
        Math.pow(thumbTip.y - indexMCP.y, 2));
    const mcpToIndexMCP = Math.sqrt(Math.pow(thumbMCP.x - indexMCP.x, 2) +
        Math.pow(thumbMCP.y - indexMCP.y, 2));
    const isAwayFromIndex = tipToIndexMCP > mcpToIndexMCP * 0.85;
    const horizontalExtension = Math.abs(thumbTip.x - thumbCMC.x);
    const verticalPalmSize = Math.abs(indexMCP.y - wrist.y);
    const hasHorizontalExtension = horizontalExtension > verticalPalmSize * 0.3;
    const thumbChecks = [isFullyExtended, isPointingAway, isStraight, isAwayFromIndex, hasHorizontalExtension];
    const passedChecks = thumbChecks.filter(Boolean).length;
    raised.push(passedChecks >= 3);
    for (let i = 1; i < 5; i++) {
        const tipIdx = FINGER_TIP_IDS[i];
        const dipIdx = tipIdx - 1;
        const pipIdx = FINGER_PIP_IDS[i];
        const mcpIdx = pipIdx - 1;
        const tip = landmarks[tipIdx];
        const dip = landmarks[dipIdx];
        const pip = landmarks[pipIdx];
        const mcp = landmarks[mcpIdx];
        const tipAbovePIP = tip.y < pip.y - palmSize * 0.08;
        const mcpToPipX = pip.x - mcp.x;
        const mcpToPipY = pip.y - mcp.y;
        const pipToDipX = dip.x - pip.x;
        const pipToDipY = dip.y - pip.y;
        const dipToTipX = tip.x - dip.x;
        const dipToTipY = tip.y - dip.y;
        const pipDipDot = mcpToPipX * pipToDipX + mcpToPipY * pipToDipY;
        const dipTipDot = pipToDipX * dipToTipX + pipToDipY * dipToTipY;
        const isNotCurled = pipDipDot > 0 && dipTipDot > -0.001;
        const tipToWristDist = Math.sqrt(Math.pow(tip.x - wrist.x, 2) + Math.pow(tip.y - wrist.y, 2));
        const mcpToWristDist = Math.sqrt(Math.pow(mcp.x - wrist.x, 2) + Math.pow(mcp.y - wrist.y, 2));
        const tipAwayFromPalm = tipToWristDist > mcpToWristDist * 0.9;
        const tipToMcpDist = Math.sqrt(Math.pow(tip.x - mcp.x, 2) + Math.pow(tip.y - mcp.y, 2));
        const minExtension = palmSize * 0.5;
        const hasGoodExtension = tipToMcpDist > minExtension;
        const isRaised = tipAbovePIP && isNotCurled && tipAwayFromPalm && hasGoodExtension;
        raised.push(isRaised);
    }
    return raised;
}
export function getFingertipPosition(hand: Hand, fingerIndex: number, canvasWidth: number, canvasHeight: number, smooth: boolean = true): Position {
    const landmark = hand.landmarks[FINGER_TIP_IDS[fingerIndex]];
    const rawPos = {
        x: (1 - landmark.x) * canvasWidth,
        y: landmark.y * canvasHeight,
    };
    if (smooth) {
        const key = `${hand.handedness}_finger_${fingerIndex}`;
        return smoothPosition(key, rawPos);
    }
    return rawPos;
}
export function getLandmarkPosition(hand: Hand, landmarkIndex: number, canvasWidth: number, canvasHeight: number, smooth: boolean = true): Position {
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
export function getRealHandSide(hand: Hand): 'left' | 'right' {
    return hand.handedness === 'Left' ? 'left' : 'right';
}
export function createFingerKey(handSide: 'left' | 'right', fingerName: FingerName): string {
    return `${handSide}_${fingerName}`;
}
export function parseFingerKey(key: string): {
    handSide: 'left' | 'right';
    fingerName: FingerName;
} {
    const [handSide, fingerName] = key.split('_') as [
        'left' | 'right',
        FingerName
    ];
    return { handSide, fingerName };
}
export function calculateDistance(p1: Position, p2: Position): number {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
}
export function isWithinBounds(pos: Position, width: number, height: number): boolean {
    return pos.x >= 0 && pos.x <= width && pos.y >= 0 && pos.y <= height;
}
export function clearLandmarkHistory(): void {
    landmarkHistory.clear();
}
