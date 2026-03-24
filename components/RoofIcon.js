import React from "react";
import { Path, Rect, Svg } from "react-native-svg";

export default function RoofIcon({ type, color }) {
  if (type === "Tejado plano") {
    return (
      <Svg width={34} height={24} viewBox="0 0 34 24">
        <Path d="M6 8 L28 8" stroke={color} strokeWidth="2" fill="none" />
        <Path d="M8 5 L26 5" stroke={color} strokeWidth="2" fill="none" />
        <Path d="M7 20 V8" stroke={color} strokeWidth="2" fill="none" />
        <Path d="M27 20 V8" stroke={color} strokeWidth="2" fill="none" />
        <Path d="M7 20 H27" stroke={color} strokeWidth="2" fill="none" />
        <Path d="M15 20 V14 H19 V20" stroke={color} strokeWidth="2" fill="none" />
      </Svg>
    );
  }

  if (type === "Tejado inclinado") {
    return (
      <Svg width={34} height={24} viewBox="0 0 34 24">
        <Rect x="7" y="11" width="20" height="9" stroke={color} strokeWidth="2" fill="none" />
        <Path d="M5 11 L17 4 L29 11" stroke={color} strokeWidth="2" fill="none" />
        <Path d="M15 20 V14 H19 V20" stroke={color} strokeWidth="2" fill="none" />
      </Svg>
    );
  }

  return (
    <Svg width={34} height={24} viewBox="0 0 34 24">
      <Path d="M7 20 V11" stroke={color} strokeWidth="2" fill="none" />
      <Path d="M27 20 V11" stroke={color} strokeWidth="2" fill="none" />
      <Path d="M7 20 H27" stroke={color} strokeWidth="2" fill="none" />
      <Path d="M5 11 L17 4 L29 11" stroke={color} strokeWidth="2" fill="none" />
      <Path d="M15 20 V14 H19 V20" stroke={color} strokeWidth="2" fill="none" />
    </Svg>
  );
}
