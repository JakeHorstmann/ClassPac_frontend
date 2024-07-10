import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAccountIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 300 300"
    {...props}
  >
    <Path fill="none" stroke="#fff" strokeWidth={3} d="M75 50v75M225 50v75" />
    <Path
      fill="none"
      stroke="#fff"
      strokeWidth={3}
      d="M50 168.877c39.406 61.356 164.324 59.265 200 0"
      transform="matrix(1 0 0 1.54428 0 -87.032)"
    />
  </Svg>
);
export default SvgAccountIcon;
