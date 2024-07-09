import * as React from "react";
import Svg, { Path, Circle, G, Rect } from "react-native-svg";
const SvgHomepageIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 300 300"
    {...props}
  >
    <Path
      fill="none"
      stroke="#fff"
      strokeWidth={3}
      d="m149.968 50-100 75L50 250h200V125z"
    />
    <Path fill="none" stroke="#fff" strokeWidth={2} d="M130 250v-60h40v60z" />
    <Circle
      r={2.5}
      fill="none"
      stroke="#fff"
      transform="translate(142.5 227.5)"
    />
    <G fill="none" stroke="#fff" strokeWidth={2}>
      <Path d="M85 150h30M100 135v30" />
      <Rect
        width={30}
        height={30}
        rx={0}
        ry={0}
        transform="translate(85 135)"
      />
    </G>
    <G fill="none" stroke="#fff" strokeWidth={2}>
      <Path d="M185 150h30M200 135v30" />
      <Rect
        width={30}
        height={30}
        rx={0}
        ry={0}
        transform="translate(185 135)"
      />
    </G>
  </Svg>
);
export default SvgHomepageIcon;
