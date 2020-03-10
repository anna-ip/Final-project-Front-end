import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

function BeetIcon(props) {
    return (
        <Svg viewBox="0 0 36.22 49.21" {...props}>
            <Defs></Defs>
            <G id="prefix__Layer_2" data-name="Layer 2">
                <G id="prefix__Layer_2-2" data-name="Layer 2">
                    <Path
                        d="M9.43 39.16c1.71 1.42 8.68 4.94 8.68 9 0-4-7-7.57-8.68-9-2.5-2.07-10.94-7.16-7.7-16.74S17.81 13 17.81 13h.6s12.84-.19 16.08 9.42-5.2 14.78-7.69 16.85c-1.71 1.42-8.69 4.89-8.69 8.94"
                        stroke="#121903"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        fill="#870e08"
                    />
                    <Path
                        className="prefix__cls-2"
                        d="M16.14 13.18L11.75 2.9 8.11 4.45l4 9.41a25.16 25.16 0 014.03-.68z"
                    />
                    <Path
                        className="prefix__cls-2"
                        d="M17.81 13h.6s1 .09 2 .23V1h-5v12.21c1.03-.12 2.4-.21 2.4-.21zM24.63 14l4.08-9.55-3.64-1.55-4.42 10.34a25 25 0 013.98.76z"
                    />
                    <Path
                        className="prefix__cls-3"
                        d="M1.44 26h5M21.44 35h10M34.44 26h-5M5.44 18h4"
                    />
                </G>
            </G>
        </Svg>
    )
}

export default BeetIcon
