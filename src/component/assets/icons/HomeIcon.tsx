import React from "react";
import Svg, {Circle, Path} from 'react-native-svg';

interface Homeprops{
    color?: string,
    width?: number,
    height?: number,
}

const Homeicon = ({width = 20, height= 20} : Homeprops) => {
    return(
        <Svg width="20" height="20" viewBox="0 0 20 20">
            <Path d="M18.3398 9.86327L10.2949 1.8242C10.237 1.76616 10.1682 1.72012 10.0925 1.6887C10.0167 1.65728 9.93551 1.64111 9.85352 1.64111C9.77152 1.64111 9.69032 1.65728 9.61458 1.6887C9.53884 1.72012 9.47003 1.76616 9.41211 1.8242L1.36719 9.86327C1.13281 10.0976 1 10.416 1 10.748C1 11.4375 1.56055 11.998 2.25 11.998H3.09766V17.7344C3.09766 18.0801 3.37695 18.3594 3.72266 18.3594H8.60352V13.9844H10.791V18.3594H15.9844C16.3301 18.3594 16.6094 18.0801 16.6094 17.7344V11.998H17.457C17.7891 11.998 18.1074 11.8672 18.3418 11.6308C18.8281 11.1426 18.8281 10.3515 18.3398 9.86327Z"
            />
        </Svg>

    )
}

export default Homeicon;