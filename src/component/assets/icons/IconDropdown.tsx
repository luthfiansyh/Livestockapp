
import React from "react";
import Svg, {Path, Defs, ClipPath, Rect, G} from 'react-native-svg';

const Dropdown = () => {
    return(
        <Svg width="16" height="16" viewBox="0 0 16 16">
            <G clip-path="url(#clip0_397:3168)">
            <Path d="M15.6478 5.21174L9.07642 13.4723C8.45304 14.228 7.492 14.228 6.8946 13.4723L0.323172 5.21174C-0.300204 4.42998 0.011484 3.83063 0.972523 3.83063H14.9985C15.9855 3.83063 16.2712 4.42998 15.6478 5.21174Z" fill="#959595"/>
            </G>
            <Defs>
            <ClipPath id="clip0_397:3168">
            <Rect width="16" height="16" fill="white"/>
            </ClipPath>
            </Defs>
        </Svg>

    )
}

export default Dropdown;