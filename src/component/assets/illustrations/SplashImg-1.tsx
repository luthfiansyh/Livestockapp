import React from "react";
import Svg, {
    Path,
    G,
    Mask,
    Ellipse,
    Rect,
    TMaskUnits
} from 'react-native-svg';

interface Splash1{
    color?: string,
    width?: number,
    height?: number,
}

const SplashImg1 = ({width = 240, height= 240} : Splash1) => {
    return(
        <Svg width={width} height={height} viewBox="0 0 360 360">
            <Mask id="mask0_441:6021" x="0" y="0" width="360" height="360">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M184.989 0.0128774C260.308 0.857513 327.126 49.4799 350.723 123.064C374.652 197.683 351.57 280.637 289.8 326.857C227.927 373.155 144.424 369.792 82.2038 323.988C18.5113 277.099 -16.5528 195.811 7.74718 119.218C31.9594 42.9019 106.954 -0.862205 184.989 0.0128774Z" fill="#DCEAFF"/>
            </Mask>
            <G mask="url(#mask0_441:6021)">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M184.99 0.0128774C260.309 0.857513 327.127 49.4799 350.724 123.064C374.653 197.683 351.571 280.637 289.801 326.857C227.928 373.155 144.424 369.792 82.2048 323.988C18.5122 277.099 -16.5518 195.811 7.74816 119.218C31.9604 42.9019 106.955 -0.862205 184.99 0.0128774Z" fill="#DCEAFF"/>
<Path d="M-65.4229 273.479H476.152C476.152 273.479 392.534 364.062 194.724 364.091C-3.0817 364.125 -65.4229 273.479 -65.4229 273.479Z" fill="#57B860"/>
<Path d="M44.1963 180.577L58.7601 166.915L113.056 84.9399L164.699 56.2516L215.019 83.5765L270.637 168.284L283.879 180.577H273.286L274.613 273.488H53.4631V183.31L44.1963 180.577" fill="#B76250"/>
<Path d="M55.2582 249.709V240.365H51.1612V249.709H48.2473V240.365H44.1558V249.709H41.2419V240.365H37.1447V249.709H34.231V240.365H30.1338V249.709H27.2199V240.365H23.1229V249.709H20.209V240.815H16.112V249.709H13.1981V240.815H9.10644V249.709H6.19257V240.815H2.09552V249.709H-0.818357V240.815H-4.91541V249.709H-7.82928V240.815H-11.9265V249.709H-14.8402V240.815H-18.9374V249.709H-21.8513V240.815H-25.9483V249.709H-28.8622V240.815H-32.9537V249.709H-33.7666V252.949H-32.9537V278.631H-28.8622V252.949H-25.9483V278.631H-21.8513V252.949H-18.9374V278.631H-14.8402V252.949H-11.9265V278.631H-7.82928V252.949H-4.91541V278.631H-0.818357V252.949H2.09552V278.631H6.19257V252.949H9.10644V278.631H13.1981V252.949H16.112V278.631H20.209V252.949H23.1229V278.186H27.2199V252.949H30.1338V278.186H34.231V252.949H37.1447V278.186H41.2419V252.949H44.1558V278.186H48.2473V252.949H51.1612V278.186H55.2582V252.949H56.5964V249.709H55.2582" fill="#1A2133"/>
<Path d="M294.489 170.945L294.787 171.065C295.324 171.276 296.888 170.734 297.043 168.555C297.082 167.962 296.888 167.14 296.352 166.924L296.053 166.804C295.517 166.587 294.776 166.827 294.693 167.42C294.489 168.909 293.892 169.542 293.892 169.542C293.681 170.095 293.952 170.729 294.489 170.945" fill="#E48C3F"/>
<Path d="M331.556 273.488L272.748 273.482L273.29 180.577H283.884L270.642 168.284L215.024 83.5765L164.703 56.2516H294.478L338.18 78.1116L384.531 164.867L398.464 179.784L383.204 177.845L385.852 273.488H331.556" fill="#974A3A"/>
<Path d="M142.695 112.001H124.35V88.7779H142.695V112.001Z" fill="white"/>
<Path d="M140.207 108.851H126.843V91.9316H140.207V108.851Z" fill="#B2B2B2"/>
<Path d="M200.427 112.001H182.081V88.7779H200.427V112.001Z" fill="white"/>
<Path d="M197.935 108.851H184.576V91.9316H197.935V108.851Z" fill="#B2B2B2"/>
<Path d="M84.6474 224.285H66.3018V201.056H84.6474V224.285Z" fill="white"/>
<Path d="M82.1504 221.13H68.792V204.21H82.1504V221.13Z" fill="#B2B2B2"/>
<Path d="M265.188 224.285H246.848V201.056H265.188V224.285Z" fill="white"/>
<Path d="M262.701 221.13H249.337V204.21H262.701V221.13Z" fill="#B2B2B2"/>
<Path d="M312.166 224.285H293.82V201.056H312.166V224.285Z" fill="white"/>
<Path d="M309.673 221.13H296.314V204.21H309.673V221.13Z" fill="#B2B2B2"/>
<Path d="M364.094 224.285H345.748V201.056H364.094V224.285Z" fill="white"/>
<Path d="M361.602 221.13H348.243V204.21H361.602V221.13Z" fill="#B2B2B2"/>
<Path d="M126.843 201.054V273.479H129.701V204.208H197.566V273.479H200.425V201.054H126.843Z" fill="white"/>
<Path d="M178.385 201.055H147.775V150.883H178.385V201.055Z" fill="white"/>
<Path d="M175.984 197.106H150.19V154.83H175.984V197.106Z" fill="#B2B2B2"/>
<Path d="M129.702 203.319L197.932 269.492L197.567 273.479L129.702 206.987V203.319" fill="white"/>
<Path d="M197.932 203.319L129.702 269.492L130.067 273.479L197.932 206.987V203.319" fill="white"/>
<Path d="M175.98 154.83L151.762 198.339H148.843L173.553 153.37L175.98 154.83" fill="white"/>
<Path d="M148.843 154.83L173.055 198.339H175.98L151.265 153.37L148.843 154.83Z" fill="white"/>
<Path d="M129.702 203.319L197.932 269.492L197.567 273.479L129.702 206.987V203.319" fill="white"/>
<Path d="M283.884 180.576H401.047L384.531 164.865L338.18 78.11L294.478 56.25H164.703L215.024 83.5749L270.642 168.282L283.884 180.576" fill="#3C3C3C"/>
<Path d="M-0.817383 272.769V272.37C0.260801 271.988 1.23947 271.412 2.09649 270.676V270.807L1.56571 272.239L0.852431 272.752L-0.817383 272.769" fill="#545C72"/>
<Path d="M-2.15137 272.785L-2.12923 272.722C-1.68137 272.637 -1.24464 272.517 -0.818891 272.368V272.768L-2.15137 272.785ZM2.09498 270.805V270.674C2.1171 270.657 2.13928 270.634 2.1614 270.617L2.09498 270.805Z" fill="#214773"/>
<Path d="M303.322 274.215C299.601 274.284 299.375 268.345 299.59 265.698C299.839 262.618 300.729 259.634 300.989 256.554C301.348 252.236 300.066 247.335 296.007 245.459L295.62 245.088C294.658 243.308 293.138 242.909 291.783 243.011C287.835 243.308 284.993 244.192 273.902 243.856C262.81 243.519 263.264 243.302 256.021 243.046C248.313 242.772 245.537 244.067 243.619 244.894C241.175 245.938 234.291 243.525 227.064 248.83C221.297 253.074 213.098 268.785 210.372 274.227C210.046 274.871 209.155 274.826 208.868 274.158C208.437 273.149 207.712 272.036 206.557 271.648C206.07 271.483 205.556 271.82 205.473 272.344C205.053 274.883 205.683 277.096 206.009 278.009L205.888 278.848L202.808 282.892L202.631 283.497C202.753 284.854 203.029 290.279 200.353 295.944C199.618 297.507 202.603 299.082 204.881 298.654C207.563 298.146 204.881 298.654 213.363 291.58C221.845 284.512 226.412 279.464 229.68 281.483C232.942 283.502 234.711 282.761 235.552 284.176C237.221 287.005 234.871 295.762 233.948 298.882C233.782 299.441 234.191 300 234.755 299.994L236.563 299.972L237.332 299.418L242.778 284.66C243.121 283.731 244.47 284.05 244.387 285.043L243.182 299.07L244.011 300.006H245.493L246.306 299.344C247.13 295.699 251.348 278.306 256.9 278.905C262.351 279.498 269.722 279.743 271.414 279.789L271.978 280.051C272.647 280.787 274.858 282.892 278.618 283.166C280.282 283.291 282.124 283.143 283.788 282.909C284.346 282.829 284.811 283.337 284.711 283.907L282.173 298.996C282.085 299.527 282.478 300.006 282.992 300.006H284.534L285.325 299.418L288.786 288.813C289.068 287.935 290.312 288.083 290.406 289.007C290.832 293.314 290.71 297.359 290.622 299.104L291.457 300.006H292.988L293.801 299.327C294.481 295.984 297.39 281.289 296.234 279.8C294.929 278.117 296.234 279.8 294.614 276.098C292.988 272.396 296.234 258.26 296.56 251.186L296.627 249.8C296.66 248.973 297.721 248.659 298.153 249.355C300.541 253.211 298.766 259.749 298.186 263.77C297.616 267.695 297.705 276.001 303.322 275.898C304.373 275.881 304.378 274.193 303.322 274.215" fill="#F5F5F5"/>
<Path d="M256.713 251.301L256.337 250.634C255.74 249.579 254.733 248.694 253.578 248.124C250.211 245.905 245.743 245.637 242.138 247.514C239.749 248.763 237.936 250.948 237.068 253.555C235.934 256.955 237.062 260.166 239.125 262.847C241.132 265.449 245.732 265.169 247.794 262.847C248.48 262.077 248.939 261.262 249.215 260.423C251.167 261.142 253.506 260.76 255.132 259.465C257.52 257.559 258.267 254.051 256.713 251.301Z" fill="#363636"/>
<Path d="M295.989 245.449L295.63 245.107C294.668 243.316 293.142 242.911 291.782 243.013C289.902 243.15 288.271 243.424 285.882 243.641L285.207 244.622C286.142 248.861 285.069 250.812 283.88 255.484C282.133 262.358 276.482 259.414 276.482 266.334C276.482 269.357 278.263 280.019 285.683 278.439C291.162 277.275 292.13 271.742 291.588 266.037L291.549 265.855C290.493 262.671 291.013 259.192 293.849 256.767C294.402 256.294 295.044 255.917 295.735 255.621L296.221 254.976C296.387 253.584 296.509 252.3 296.559 251.188C296.586 250.618 296.592 250.081 296.581 249.579C296.559 248.815 297.537 248.467 297.969 249.089C298.942 250.481 299.307 252.272 299.356 254.183L300.042 254.964L300.142 254.976L301.004 254.12C300.772 250.521 299.307 246.978 295.989 245.449" fill="#363636"/>
<Path d="M290.665 293.103C290.754 295.773 290.676 298.015 290.615 299.167L291.389 300.006H293.037L293.789 299.378C294.054 298.089 294.668 295.003 295.249 291.637C295.365 290.981 294.685 290.473 294.115 290.804C293.142 291.375 292.147 291.888 291.124 292.35L290.665 293.103Z" fill="#363636"/>
<Path d="M213.336 281C212.948 278.016 213.026 274.976 213.125 271.981C213.147 271.279 213.236 270.207 213.258 269.186L213.026 269.106C211.881 271.239 210.947 273.088 210.316 274.343C210.012 274.947 209.172 274.902 208.918 274.28C208.481 273.219 207.729 272.01 206.49 271.627L205.484 272.272C205.036 274.879 205.7 277.149 206.026 278.045L205.91 278.821L202.791 282.911L202.631 283.476C202.753 284.799 203.046 290.253 200.353 295.946C199.618 297.509 202.603 299.083 204.881 298.656C207.563 298.148 204.881 298.656 213.363 291.582C214.148 290.932 214.889 290.304 215.608 289.688L215.779 288.695C214.535 286.374 213.7 283.812 213.336 281" fill="#363636"/>
<Path d="M259.36 273.691C259.426 270.119 255.323 269.104 253.565 270.895C250.203 274.318 245.177 277.598 240.903 272.955C234.462 265.949 232.787 254.74 236.9 246.508C237.177 245.949 236.751 245.287 236.148 245.35C233.428 245.641 230.282 246.468 227.064 248.83C225.809 249.754 224.438 251.226 223.033 253.017L223.171 254.147C227.866 257.575 229.342 265.493 229.165 271.768C229.082 274.769 228.601 278.437 229.917 281.021L230.829 281.432C234.484 280.496 239.04 282.51 240.804 286.258C241.103 286.88 241.976 286.828 242.214 286.184L242.927 284.25C243.248 283.383 244.503 283.679 244.42 284.603L243.176 299.139L243.944 300.006H245.542L246.294 299.39C247.057 296.001 250.978 279.715 256.219 278.922C256.507 278.437 259.277 277.843 259.36 273.691" fill="#363636"/>
<Path d="M219.629 298.845C219.629 298.845 219.219 298.532 219.12 299.895C219.015 301.253 219.12 301.675 219.12 301.675C219.828 301.989 219.22 302.616 220.441 302.936C221.658 303.249 226.026 303.98 226.026 303.98C226.026 303.98 225.418 305.657 227.148 306.815C228.873 307.967 233.186 319.821 235.785 321.282C239.141 323.17 242.287 322.331 242.492 324.008C242.696 325.686 243.813 329.776 242.553 333.233C241.342 336.553 240.153 337.431 240.153 337.431H241.983L240.767 340.261H244.626L245.234 338.059C245.234 338.059 246.86 328.412 248.082 325.161C249.304 321.909 249.304 321.909 249.304 321.909C249.304 321.909 253.572 323.695 259.466 323.381C265.36 323.067 268.506 321.39 268.506 321.39C268.506 321.39 269.07 322.434 272.526 324.111C275.982 325.794 276.54 326.108 276.54 326.108C276.54 326.108 277.148 329.462 276.031 332.291C274.909 335.121 273.283 335.754 273.593 335.857L275.219 336.695L273.488 339.108L276.524 339.211C276.64 338.897 279.078 336.279 280.095 331.036C281.113 325.788 280.809 323.381 280.809 323.381L279.178 321.493C279.178 321.493 285.077 310.169 278.47 303.455C271.863 296.746 255.905 300.939 249.912 300.101C243.913 299.262 240.053 299.787 240.053 299.787L235.481 295.908C235.58 295.594 236.194 295.28 237.007 293.808C237.82 292.342 238.428 290.454 238.428 290.454C238.428 290.454 236.089 291.817 234.159 292.867C232.23 293.917 232.125 294.653 231.312 294.231C230.499 293.808 228.061 292.656 226.435 293.392C224.809 294.128 219.629 298.845 219.629 298.845Z" fill="#363636"/>
<Path d="M275.23 325.438C275.23 325.438 275.44 326.454 275.612 327.401C275.744 328.154 276.435 328.661 277.165 328.553C277.807 328.45 278.913 328.445 279.88 328.547C280.898 328.656 281.771 327.812 281.716 326.756C281.6 324.537 280.809 323.379 280.809 323.379L279.178 321.491C279.178 321.491 285.072 310.167 278.47 303.453C271.863 296.744 255.906 300.937 249.912 300.099C243.913 299.26 240.054 299.785 240.054 299.785C240.054 299.785 236.803 297.309 235.785 296.299C234.386 296.767 232.661 296.134 231.727 295.073L231.146 294.143C230.615 293.881 229.675 293.459 228.675 293.259C228.973 293.955 229.128 294.731 229.078 295.598C228.984 297.195 228.26 298.718 227.281 299.933C226.281 301.188 224.97 302.529 223.505 303.538C224.826 303.778 226.026 303.978 226.026 303.978C226.026 303.978 225.418 305.655 227.149 306.813C228.874 307.965 233.187 319.819 235.785 321.28C239.141 323.168 241.679 322.324 241.884 324.001C241.95 324.56 241.734 325.433 241.884 326.414C242.492 327.252 248.281 327.327 248.557 326.46L248.795 325.678C248.994 324.971 249.182 324.406 249.354 323.961C249.713 322.997 250.714 322.449 251.687 322.706C253.152 323.094 255.795 323.573 259.466 323.379C265.361 323.065 268.507 321.388 268.507 321.388C268.507 321.388 269.071 322.432 272.526 324.109C275.982 325.792 275.23 325.438 275.23 325.438" fill="#F5F5F5"/>
<Path d="M199.412 254.756C199.412 254.756 199.766 254.482 199.854 255.658C199.943 256.838 199.854 257.203 199.854 257.203C199.235 257.472 199.766 258.019 198.71 258.287C197.654 258.561 193.877 259.194 193.877 259.194C193.877 259.194 194.403 260.649 192.91 261.642C191.417 262.64 187.685 272.891 185.44 274.158C182.543 275.789 179.817 275.065 179.64 276.514C179.463 277.963 178.495 281.499 179.59 284.494C180.635 287.364 181.664 288.122 181.664 288.122H180.077L181.133 290.57H177.793L177.268 288.664C177.268 288.664 175.863 280.324 174.807 277.512C173.751 274.699 173.751 274.7 173.751 274.7C173.751 274.7 170.063 276.24 164.966 275.972C159.868 275.698 157.142 274.249 157.142 274.249C157.142 274.249 156.655 275.156 153.669 276.605C150.684 278.054 150.197 278.328 150.197 278.328C150.197 278.328 149.672 281.231 150.64 283.679C151.607 286.126 153.011 286.668 152.746 286.759L151.342 287.483L152.835 289.571L150.208 289.663C150.114 289.389 148.002 287.124 147.123 282.589C146.244 278.054 146.509 275.972 146.509 275.972L147.914 274.34C147.914 274.34 142.816 264.545 148.527 258.744C154.244 252.942 168.04 256.565 173.226 255.84C178.407 255.116 181.747 255.572 181.747 255.572L185.705 252.212C185.617 251.944 185.086 251.67 184.384 250.404C183.682 249.132 183.156 247.5 183.156 247.5C183.156 247.5 185.175 248.681 186.844 249.588C188.514 250.489 188.603 251.128 189.305 250.763C190.013 250.404 192.119 249.405 193.524 250.039C194.933 250.672 199.412 254.756 199.412 254.756" fill="#363636"/>
<Path d="M151.333 277.751C151.333 277.751 151.15 278.635 151.007 279.445C150.885 280.096 150.293 280.541 149.657 280.444C149.105 280.358 148.148 280.353 147.313 280.438C146.428 280.535 145.676 279.805 145.721 278.892C145.826 276.97 146.511 275.971 146.511 275.971L147.916 274.34C147.916 274.34 142.818 264.545 148.529 258.744C154.247 252.942 168.042 256.564 173.228 255.84C178.409 255.115 181.749 255.572 181.749 255.572C181.749 255.572 184.563 253.427 185.442 252.554C186.653 252.959 188.146 252.411 188.953 251.493L189.451 250.694C189.91 250.466 190.728 250.095 191.59 249.924C191.331 250.523 191.198 251.196 191.242 251.949C191.325 253.33 191.95 254.642 192.796 255.697C193.658 256.781 194.792 257.939 196.064 258.818C194.919 259.023 193.88 259.194 193.88 259.194C193.88 259.194 194.405 260.649 192.912 261.641C191.419 262.64 187.687 272.891 185.442 274.157C182.545 275.789 180.344 275.059 180.167 276.508C180.112 276.993 180.3 277.751 180.167 278.595C179.642 279.32 174.638 279.383 174.395 278.635L174.196 277.962C174.019 277.346 173.859 276.861 173.709 276.473C173.394 275.641 172.531 275.167 171.691 275.39C170.425 275.726 168.141 276.137 164.968 275.971C159.87 275.698 157.144 274.249 157.144 274.249C157.144 274.249 156.657 275.156 153.672 276.605C150.686 278.054 151.333 277.751 151.333 277.751" fill="#F5F5F5"/>
<Path d="M166.853 94.4487C166.844 112.148 159.743 125.835 129.59 126.475C101.698 127.064 92.3485 112.111 92.3574 94.4119C92.3663 76.7123 109.049 62.3769 129.621 62.3861C150.193 62.3953 166.862 76.7492 166.853 94.4487Z" fill="#1A2133"/>
<Path d="M121.999 142.707C121.999 142.707 125.978 131.782 117.534 127.649C111.994 124.938 109.505 119.724 106.686 114.588C103.185 116.691 100.865 109.37 100.236 104.795C100.022 103.24 99.9195 101.73 99.924 100.257C99.924 99.6499 99.9418 99.0563 99.9775 98.4673C100.981 82.0471 115.219 71.1678 131.366 71.9041C149.258 72.7141 157.465 84.7531 157.996 99.2036C158.286 107.023 156.76 115.766 152.362 114.344C149.298 118.79 147.001 124.658 140.872 128.266C136.001 131.133 138.838 138.763 138.178 142.891C137.535 146.913 147.839 150.963 147.839 150.963C148.789 158.819 144.355 163.177 130.546 163.596C115.081 164.065 113.734 154.668 112.422 150.342C117.543 148.625 121.999 144.009 121.999 142.707Z" fill="#F8BA7E"/>
<Path d="M209.313 210.067C209.313 210.067 200.28 212.846 190.962 218.212C184.793 181.727 167.062 155.394 143.493 148.624C143.493 148.624 140.366 158.303 129.759 158.639C117.381 159.03 114.361 149.108 114.361 149.108C93.508 153.839 79.6312 168.068 68.5869 205.331C54.7815 251.904 68.5869 291.418 68.5869 291.418L76.4642 293.189C76.4642 293.189 91.7104 202.694 92.6917 201.175C93.673 199.657 98.8026 256.451 98.8026 256.451L161.353 258.669C161.353 258.669 166.179 205.649 165.747 203.297C166.086 205.097 167.178 219.657 174.855 235.305C177.54 240.781 187.148 246.308 200.28 237.79C213.787 229.027 216.49 216.836 216.49 216.836L209.313 210.067Z" fill="#3C3C3C"/>
<Path d="M121.378 115.679C120.544 116.466 124.3 120.516 129.046 120.64C134.421 120.778 137.302 116.434 136.647 115.776C136.169 115.297 133.939 116.195 129.501 116.342C124.639 116.503 122.079 115.017 121.378 115.679Z" fill="#D02242"/>
<Path d="M123.757 115.776C124.551 116.678 126.371 117.943 128.855 118.164C132.241 118.464 134.132 116.899 134.77 115.767C130.845 116.319 127.227 116.291 123.757 115.776Z" fill="#F5E7CA"/>
<Path d="M131.005 81.785C131.005 81.785 126.883 91.1549 128.618 90.5842C133.704 88.9091 138.084 83.7777 140.024 85.1077C143.807 87.7033 153.433 108.09 153.433 108.09C153.433 108.09 154.606 101.473 157.813 102.678C159.517 97.2571 158.812 87.5238 149.949 78.8949C143.86 72.9766 134.31 71.4395 128.654 71.9641C123.003 72.4934 113.234 73.262 107.065 80.6805C103.403 85.0893 99.2814 90.911 99.8569 101.744C103.068 100.842 105.794 103.995 105.499 108.509C105.499 108.509 109.411 102.435 114.251 95.8674C118.248 90.4461 123.404 83.4785 123.404 83.4785C123.404 83.4785 119.336 94.1922 119.894 93.8747C128.36 88.9873 131.005 81.785 131.005 81.785" fill="#AD5028"/>
<Path d="M76.3478 291.598C76.3478 291.598 70.0094 290.364 67.953 291.423C66.7532 295.841 65.4417 304.208 64.3534 309.629C63.3274 314.756 67.4713 320.108 71.7222 321.12C74.9605 321.889 73.8722 313.467 75.1479 309.808C75.6296 308.428 76.1783 315.819 77.3782 314.755C81.5666 311.051 76.3478 291.598 76.3478 291.598" fill="#F8BA7E"/>
<Path d="M102.501 151.929C102.501 151.929 90.8995 265.94 89.6193 291.5C88.3436 316.941 100.789 405.153 107.457 428.49C116.195 429.024 117.962 427.289 117.962 427.289L129.193 294.699C129.193 294.699 135.831 395.457 139.93 419.857C146.099 419.857 153.352 420.496 153.352 420.496C153.352 420.496 169.28 307.976 167.746 284.643C166.216 261.311 156.911 152.743 156.911 152.743L149.435 149.894L152.37 193.688L107.412 194.194L109.009 149.384L102.501 151.929" fill="#DCDCDC"/>
<Path d="M114.541 148.626C114.541 148.626 119.448 158.52 129.399 158.649C139.043 158.769 143.495 148.626 143.495 148.626L145.453 149.385C145.123 150.213 140.97 160.241 129.386 160.564C118.587 160.863 112.904 149.468 112.904 149.468L114.541 148.626Z" fill="#1A2133"/>
<Path d="M68.135 290.019L67.9521 291.422L76.7439 293.189L76.7305 291.606L68.135 290.019" fill="#1A2133"/>
<Path d="M109.71 375.798C104.634 375.798 100.521 371.559 100.521 366.322C100.521 361.09 104.634 356.846 109.71 356.846C114.782 356.846 118.894 361.09 118.894 366.322C118.894 371.559 114.782 375.798 109.71 375.798Z" fill="#555D74"/>
<Path d="M146.76 375.798C141.689 375.798 137.576 371.559 137.576 366.322C137.576 361.09 141.689 356.846 146.76 356.846C151.832 356.846 155.949 361.09 155.949 366.322C155.949 371.559 151.832 375.798 146.76 375.798Z" fill="#555D74"/>
<Path d="M209.579 210.313L215.266 218.573C218.222 215.137 223.364 208.815 226.641 204.432C229.737 200.284 226.06 190.962 222.081 190.294C218.804 189.74 219.709 196.684 217.008 199.402C215.991 200.425 218.629 193.534 217.102 193.945C211.764 195.386 209.579 210.313 209.579 210.313" fill="#F8BA7E"/>
<Path d="M209.696 209.686L216.258 218.522L215.267 220.137L207.858 210.726L209.696 209.686Z" fill="#1A2133"/>
<Rect x="208.779" y="165.287" width="23.1993" height="45.3947" rx="4" fill="#313131"/>
<Rect x="207.178" y="163.636" width="23.1993" height="45.3947" rx="4" fill="#565656"/>
<Rect x="208.778" y="169.414" width="19.9994" height="36.3158" rx="2" fill="#F1F1F1"/>
<Ellipse cx="218.776" cy="187.159" rx="5.99982" ry="6.19019" fill="#57B860"/>
</G>
        </Svg>


    )
}

export default SplashImg1;