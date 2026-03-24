import React from "react";
import { Line, Circle, Polygon, Svg, Text as SvgText } from "react-native-svg";

export default function CompassDial({ degrees = 0, cardinal = "N" }) {
  const size = 150;
  const center = size / 2;
  const radius = 56;
  const angle = ((degrees || 0) - 90) * (Math.PI / 180);
  const pointerTipX = center + Math.cos(angle) * radius;
  const pointerTipY = center + Math.sin(angle) * radius;
  const pointerBaseLeftX = center + Math.cos(angle + Math.PI * 0.88) * 14;
  const pointerBaseLeftY = center + Math.sin(angle + Math.PI * 0.88) * 14;
  const pointerBaseRightX = center + Math.cos(angle - Math.PI * 0.88) * 14;
  const pointerBaseRightY = center + Math.sin(angle - Math.PI * 0.88) * 14;

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Circle cx={center} cy={center} r="68" fill="#f7f9f2" stroke="#dbe4c8" strokeWidth="1.5" />
      <Circle cx={center} cy={center} r="54" fill="#ffffff" stroke="#dbe4c8" strokeWidth="1" />
      <Line x1={center} y1="16" x2={center} y2="26" stroke="#94a37b" strokeWidth="2" />
      <Line x1={center} y1="124" x2={center} y2="134" stroke="#94a37b" strokeWidth="2" />
      <Line x1="16" y1={center} x2="26" y2={center} stroke="#94a37b" strokeWidth="2" />
      <Line x1="124" y1={center} x2="134" y2={center} stroke="#94a37b" strokeWidth="2" />
      <SvgText x={center} y="14" fontSize="12" fontWeight="700" fill="#31451f" textAnchor="middle">
        N
      </SvgText>
      <SvgText x={center} y="146" fontSize="12" fontWeight="700" fill="#617252" textAnchor="middle">
        S
      </SvgText>
      <SvgText x="10" y={center + 4} fontSize="12" fontWeight="700" fill="#617252" textAnchor="start">
        O
      </SvgText>
      <SvgText x="140" y={center + 4} fontSize="12" fontWeight="700" fill="#617252" textAnchor="end">
        E
      </SvgText>
      <Polygon
        points={`${pointerTipX},${pointerTipY} ${pointerBaseLeftX},${pointerBaseLeftY} ${pointerBaseRightX},${pointerBaseRightY}`}
        fill="#9cc31a"
        stroke="#7fa315"
        strokeWidth="1"
      />
      <Circle cx={center} cy={center} r="5" fill="#31451f" />
      <SvgText x={center} y={center + 28} fontSize="16" fontWeight="700" fill="#31451f" textAnchor="middle">
        {cardinal}
      </SvgText>
    </Svg>
  );
}
