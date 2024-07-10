import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgEventIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 300 300"
    {...props}
  >
    <Rect
      width={70}
      height={10}
      fill="none"
      stroke="#fff"
      strokeLinejoin="bevel"
      strokeWidth={2}
      rx={0}
      ry={0}
      transform="translate(115 70)"
    />
    <Rect
      width={70}
      height={120}
      fill="none"
      stroke="#fff"
      strokeLinejoin="bevel"
      strokeWidth={2}
      rx={0}
      ry={0}
      transform="translate(115 80)"
    />
    <Rect
      width={70}
      height={20}
      fill="none"
      stroke="#fff"
      strokeWidth={2}
      rx={0}
      ry={0}
      transform="translate(115 50)"
    />
    <Path
      fill="none"
      stroke="#fff"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="m150 250 34.5-50h-69z"
    />
    <Path fill="none" stroke="#fff" d="M167.613 225H132.15z" />
  </Svg>
);
export default SvgEventIcon;
