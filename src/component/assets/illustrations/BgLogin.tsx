import React from "react";
import Svg, {Rect, Path} from 'react-native-svg';

interface BgProps{
    color?: string,
    width?: number,
    height?: number,
}

const BgLogin = ({width = 412, height= 188} : BgProps) => {
    return(
        <Svg width={width} height={height} viewBox="0 0 412 188">
            <Rect width="412" height="155" fill="#DCEAFF"/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M0 102.431H7.55333C15.1067 102.431 30.5567 102.431 45.6633 104.495C61.1133 106.559 76.22 110.687 91.67 110.687C106.777 110.687 122.227 106.559 137.333 94.1749C152.44 81.7911 167.89 61.1514 182.997 46.7037C198.447 32.2559 213.553 24 229.003 28.1279C244.11 32.2559 259.56 48.7676 274.667 46.7037C289.773 44.6397 305.223 24 320.33 24C335.78 24 350.887 44.6397 366.337 61.1514C381.443 77.6632 396.893 90.047 404.447 96.2389L412 102.431V188H404.447C396.893 188 381.443 188 366.337 188C350.887 188 335.78 188 320.33 188C305.223 188 289.773 188 274.667 188C259.56 188 244.11 188 229.003 188C213.553 188 198.447 188 182.997 188C167.89 188 152.44 188 137.333 188C122.227 188 106.777 188 91.67 188C76.22 188 61.1133 188 45.6633 188C30.5567 188 15.1067 188 7.55333 188H0V102.431Z" fill="#57B860"/>
<Path d="M301.735 119.16V115.823H300.224V119.16H299.148V115.823H297.635V119.16H296.559V115.823H295.045V119.16H293.969V115.823H292.456V119.16H291.38V115.823H289.867V119.16H288.791V115.984H287.278V119.16H286.202V115.984H284.691V119.16H283.615V115.984H282.102V119.16H281.026V115.984H279.513V119.16H278.437V115.984H276.924V119.16H275.848V115.984H274.335V119.16H273.259V115.984H271.746V119.16H270.672V115.984H269.159V119.16H268.858V120.316H269.159V129.486H270.672V120.316H271.746V129.486H273.259V120.316H274.335V129.486H275.848V120.316H276.924V129.486H278.437V120.316H279.513V129.486H281.026V120.316H282.102V129.486H283.615V120.316H284.691V129.486H286.202V120.316H287.278V129.486H288.791V120.316H289.867V129.327H291.38V120.316H292.456V129.327H293.969V120.316H295.045V129.327H296.559V120.316H297.635V129.327H299.148V120.316H300.224V129.327H301.735V120.316H302.229V119.16H301.735Z" fill="#1A2133"/>
<Path d="M146.481 94.4759L151.86 89.5977L171.911 60.3282L190.982 50.0849L209.565 59.8414L230.105 90.0865L234.995 94.4759H231.083L231.573 127.65H149.904V95.4516L146.481 94.4759Z" fill="#B76250"/>
<Path d="M150.567 119.16V115.823H149.054V119.16H147.978V115.823H146.467V119.16H145.391V115.823H143.878V119.16H142.801V115.823H141.288V119.16H140.212V115.823H138.699V119.16H137.623V115.984H136.11V119.16H135.034V115.984H133.523V119.16H132.447V115.984H130.934V119.16H129.858V115.984H128.345V119.16H127.269V115.984H125.756V119.16H124.68V115.984H123.167V119.16H122.091V115.984H120.578V119.16H119.502V115.984H117.991V119.16H117.69V120.316H117.991V129.486H119.502V120.316H120.578V129.486H122.091V120.316H123.167V129.486H124.68V120.316H125.756V129.486H127.269V120.316H128.345V129.486H129.858V120.316H130.934V129.486H132.447V120.316H133.523V129.486H135.034V120.316H136.11V129.486H137.623V120.316H138.699V129.327H140.212V120.316H141.288V129.327H142.801V120.316H143.878V129.327H145.391V120.316H146.467V129.327H147.978V120.316H149.054V129.327H150.567V120.316H151.061V119.16H150.567Z" fill="#1A2133"/>
<Path d="M238.913 91.0368L239.023 91.0795C239.221 91.1549 239.799 90.9614 239.856 90.1833C239.87 89.9715 239.799 89.6782 239.601 89.6008L239.491 89.558C239.293 89.4806 239.019 89.5661 238.988 89.778C238.913 90.3096 238.692 90.5357 238.692 90.5357C238.615 90.7332 238.715 90.9594 238.913 91.0368Z" fill="#E48C3F"/>
<Path d="M252.601 127.65L230.884 127.648L231.084 94.4759H234.996L230.106 90.0865L209.567 59.8414L190.983 50.0849H238.908L255.047 57.8901L272.164 88.8664L277.31 94.1928L271.674 93.5003L272.652 127.65H252.601Z" fill="#974A3A"/>
<Path d="M182.857 69.9905H176.082V61.6985H182.857V69.9905Z" fill="white"/>
<Path d="M181.938 68.8658H177.003V62.8246H181.938V68.8658Z" fill="#B2B2B2"/>
<Path d="M204.176 69.9905H197.401V61.6985H204.176V69.9905Z" fill="white"/>
<Path d="M203.256 68.8658H198.323V62.8246H203.256V68.8658Z" fill="#B2B2B2"/>
<Path d="M161.42 110.082H154.646V101.788H161.42V110.082Z" fill="white"/>
<Path d="M160.498 108.956H155.564V102.914H160.498V108.956Z" fill="#B2B2B2"/>
<Path d="M228.092 110.082H221.319V101.788H228.092V110.082Z" fill="white"/>
<Path d="M227.174 108.956H222.238V102.914H227.174V108.956Z" fill="#B2B2B2"/>
<Path d="M245.441 110.082H238.666V101.788H245.441V110.082Z" fill="white"/>
<Path d="M244.52 108.956H239.587V102.914H244.52V108.956Z" fill="#B2B2B2"/>
<Path d="M264.617 110.082H257.842V101.788H264.617V110.082Z" fill="white"/>
<Path d="M263.697 108.956H258.764V102.914H263.697V108.956Z" fill="#B2B2B2"/>
<Path d="M177.003 101.787V127.647H178.059V102.914H203.121V127.647H204.176V101.787H177.003Z" fill="white"/>
<Path d="M196.036 101.788H184.732V83.8737H196.036V101.788Z" fill="white"/>
<Path d="M195.149 100.378H185.624V85.2825H195.149V100.378Z" fill="#B2B2B2"/>
<Path d="M178.059 102.596L203.255 126.223L203.121 127.647L178.059 103.906V102.596Z" fill="white"/>
<Path d="M203.255 102.596L178.059 126.223L178.193 127.647L203.255 103.906V102.596Z" fill="white"/>
<Path d="M195.149 85.2828L186.205 100.818H185.127L194.252 84.7613L195.149 85.2828Z" fill="white"/>
<Path d="M185.127 85.2828L194.068 100.818H195.149L186.021 84.7613L185.127 85.2828Z" fill="white"/>
<Path d="M178.059 102.596L203.255 126.223L203.121 127.647L178.059 103.906V102.596Z" fill="white"/>
<Path d="M234.996 94.4752H278.263L272.164 88.8657L255.047 57.8894L238.908 50.0842H190.983L209.567 59.8407L230.106 90.0858L234.996 94.4752Z" fill="#3C3C3C"/>
<Path d="M106 127.647H306C306 127.647 275.121 159.99 202.07 160C129.022 160.012 106 127.647 106 127.647Z" fill="#57B860"/>
<Path d="M129.858 127.393V127.251C130.257 127.114 130.618 126.909 130.934 126.646V126.693L130.738 127.204L130.475 127.387L129.858 127.393Z" fill="#545C72"/>
<Path d="M129.367 127.399L129.375 127.377C129.541 127.346 129.702 127.303 129.859 127.25V127.393L129.367 127.399ZM130.935 126.692V126.645C130.944 126.639 130.952 126.631 130.96 126.625L130.935 126.692Z" fill="#214773"/>
        </Svg>

    )
}

export default BgLogin;