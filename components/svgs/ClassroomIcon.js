import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
const SvgClassroomIcon = (props) => (
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
      strokeLinejoin="bevel"
      strokeWidth={2}
      d="M105 160v-57.41h10V160zM210 160v-57.41h10V160z"
    />
    <G fill="none" stroke="#fff" strokeLinejoin="bevel" strokeWidth={2}>
      <Path d="M80 190h115v-10H80zM195 190l25-20v-10l-25 20z" />
      <Path d="M195 180H80l25-20h115" />
    </G>
    <G fill="none" stroke="#fff" strokeLinejoin="bevel" strokeWidth={2}>
      <Path d="M210 230v-52l10-8v60zM185 250v-60h10v60zM105 230v-40h10v40zM80 250v-60h10v60z" />
    </G>
    <G fill="none" stroke="#fff" strokeLinejoin="bevel" strokeWidth={2}>
      <Path d="M220 62.592v40M105 62.592v40M105 62.592c26.36-17.594 83.981-15.986 115 0M115 102.592c21.775-17.594 69.376-15.986 95 0" />
    </G>
  </Svg>
);
export default SvgClassroomIcon;
