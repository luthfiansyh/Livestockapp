import React from "react";
import Svg, {Circle, Path, Mask, G, } from 'react-native-svg';

interface KalkuProps{
    color?: string,
    width?: number,
    height?: number,
}

const Kalkulator = ({width = 56, height= 56} : KalkuProps) => {
    return(
        <Svg width={width} height={height} viewBox="0 0 56 56">
            <Circle cx="28" cy="28" r="28" fill="#F5E8E8"/>
            <Path d="M14 15.85C14 14.2985 14.6163 12.8105 15.7134 11.7134C16.8105 10.6163 18.2985 10 19.85 10H36.95C38.5015 10 39.9895 10.6163 41.0866 11.7134C42.1837 12.8105 42.8 14.2985 42.8 15.85V40.15C42.8 40.9182 42.6487 41.6789 42.3547 42.3887C42.0607 43.0985 41.6298 43.7434 41.0866 44.2866C40.5434 44.8298 39.8985 45.2607 39.1887 45.5547C38.4789 45.8487 37.7182 46 36.95 46H19.85C19.0818 46 18.3211 45.8487 17.6113 45.5547C16.9015 45.2607 16.2566 44.8298 15.7134 44.2866C15.1702 43.7434 14.7393 43.0985 14.4453 42.3887C14.1513 41.6789 14 40.9182 14 40.15V15.85ZM23 15.4C22.0452 15.4 21.1295 15.7793 20.4544 16.4544C19.7793 17.1295 19.4 18.0452 19.4 19V20.8C19.4 21.7548 19.7793 22.6705 20.4544 23.3456C21.1295 24.0207 22.0452 24.4 23 24.4H33.8C34.7548 24.4 35.6705 24.0207 36.3456 23.3456C37.0207 22.6705 37.4 21.7548 37.4 20.8V19C37.4 18.0452 37.0207 17.1295 36.3456 16.4544C35.6705 15.7793 34.7548 15.4 33.8 15.4H23ZM23.9 30.25C23.9 29.6533 23.6629 29.081 23.241 28.659C22.819 28.2371 22.2467 28 21.65 28C21.0533 28 20.481 28.2371 20.059 28.659C19.6371 29.081 19.4 29.6533 19.4 30.25C19.4 30.8467 19.6371 31.419 20.059 31.841C20.481 32.2629 21.0533 32.5 21.65 32.5C22.2467 32.5 22.819 32.2629 23.241 31.841C23.6629 31.419 23.9 30.8467 23.9 30.25V30.25ZM21.65 39.7C22.2467 39.7 22.819 39.4629 23.241 39.041C23.6629 38.619 23.9 38.0467 23.9 37.45C23.9 36.8533 23.6629 36.281 23.241 35.859C22.819 35.4371 22.2467 35.2 21.65 35.2C21.0533 35.2 20.481 35.4371 20.059 35.859C19.6371 36.281 19.4 36.8533 19.4 37.45C19.4 38.0467 19.6371 38.619 20.059 39.041C20.481 39.4629 21.0533 39.7 21.65 39.7V39.7ZM37.4 30.25C37.4 29.6533 37.1629 29.081 36.741 28.659C36.319 28.2371 35.7467 28 35.15 28C34.5533 28 33.981 28.2371 33.559 28.659C33.1371 29.081 32.9 29.6533 32.9 30.25C32.9 30.8467 33.1371 31.419 33.559 31.841C33.981 32.2629 34.5533 32.5 35.15 32.5C35.7467 32.5 36.319 32.2629 36.741 31.841C37.1629 31.419 37.4 30.8467 37.4 30.25V30.25ZM35.15 39.7C35.7467 39.7 36.319 39.4629 36.741 39.041C37.1629 38.619 37.4 38.0467 37.4 37.45C37.4 36.8533 37.1629 36.281 36.741 35.859C36.319 35.4371 35.7467 35.2 35.15 35.2C34.5533 35.2 33.981 35.4371 33.559 35.859C33.1371 36.281 32.9 36.8533 32.9 37.45C32.9 38.0467 33.1371 38.619 33.559 39.041C33.981 39.4629 34.5533 39.7 35.15 39.7V39.7ZM30.65 30.25C30.65 29.6533 30.4129 29.081 29.991 28.659C29.569 28.2371 28.9967 28 28.4 28C27.8033 28 27.231 28.2371 26.809 28.659C26.3871 29.081 26.15 29.6533 26.15 30.25C26.15 30.8467 26.3871 31.419 26.809 31.841C27.231 32.2629 27.8033 32.5 28.4 32.5C28.9967 32.5 29.569 32.2629 29.991 31.841C30.4129 31.419 30.65 30.8467 30.65 30.25V30.25ZM28.4 39.7C28.9967 39.7 29.569 39.4629 29.991 39.041C30.4129 38.619 30.65 38.0467 30.65 37.45C30.65 36.8533 30.4129 36.281 29.991 35.859C29.569 35.4371 28.9967 35.2 28.4 35.2C27.8033 35.2 27.231 35.4371 26.809 35.859C26.3871 36.281 26.15 36.8533 26.15 37.45C26.15 38.0467 26.3871 38.619 26.809 39.041C27.231 39.4629 27.8033 39.7 28.4 39.7V39.7Z" fill="#57B860"/>
            <Mask id="mask0_444:6742" x="14" y="10" width="29" height="36">
            <Path d="M14 15.85C14 14.2985 14.6163 12.8105 15.7134 11.7134C16.8105 10.6163 18.2985 10 19.85 10H36.95C38.5015 10 39.9895 10.6163 41.0866 11.7134C42.1837 12.8105 42.8 14.2985 42.8 15.85V40.15C42.8 40.9182 42.6487 41.6789 42.3547 42.3887C42.0607 43.0985 41.6298 43.7434 41.0866 44.2866C40.5434 44.8298 39.8985 45.2607 39.1887 45.5547C38.4789 45.8487 37.7182 46 36.95 46H19.85C19.0818 46 18.3211 45.8487 17.6113 45.5547C16.9015 45.2607 16.2566 44.8298 15.7134 44.2866C15.1702 43.7434 14.7393 43.0985 14.4453 42.3887C14.1513 41.6789 14 40.9182 14 40.15V15.85ZM23 15.4C22.0452 15.4 21.1295 15.7793 20.4544 16.4544C19.7793 17.1295 19.4 18.0452 19.4 19V20.8C19.4 21.7548 19.7793 22.6705 20.4544 23.3456C21.1295 24.0207 22.0452 24.4 23 24.4H33.8C34.7548 24.4 35.6705 24.0207 36.3456 23.3456C37.0207 22.6705 37.4 21.7548 37.4 20.8V19C37.4 18.0452 37.0207 17.1295 36.3456 16.4544C35.6705 15.7793 34.7548 15.4 33.8 15.4H23ZM23.9 30.25C23.9 29.6533 23.6629 29.081 23.241 28.659C22.819 28.2371 22.2467 28 21.65 28C21.0533 28 20.481 28.2371 20.059 28.659C19.6371 29.081 19.4 29.6533 19.4 30.25C19.4 30.8467 19.6371 31.419 20.059 31.841C20.481 32.2629 21.0533 32.5 21.65 32.5C22.2467 32.5 22.819 32.2629 23.241 31.841C23.6629 31.419 23.9 30.8467 23.9 30.25ZM21.65 39.7C22.2467 39.7 22.819 39.4629 23.241 39.041C23.6629 38.619 23.9 38.0467 23.9 37.45C23.9 36.8533 23.6629 36.281 23.241 35.859C22.819 35.4371 22.2467 35.2 21.65 35.2C21.0533 35.2 20.481 35.4371 20.059 35.859C19.6371 36.281 19.4 36.8533 19.4 37.45C19.4 38.0467 19.6371 38.619 20.059 39.041C20.481 39.4629 21.0533 39.7 21.65 39.7ZM37.4 30.25C37.4 29.6533 37.1629 29.081 36.741 28.659C36.319 28.2371 35.7467 28 35.15 28C34.5533 28 33.981 28.2371 33.559 28.659C33.1371 29.081 32.9 29.6533 32.9 30.25C32.9 30.8467 33.1371 31.419 33.559 31.841C33.981 32.2629 34.5533 32.5 35.15 32.5C35.7467 32.5 36.319 32.2629 36.741 31.841C37.1629 31.419 37.4 30.8467 37.4 30.25ZM35.15 39.7C35.7467 39.7 36.319 39.4629 36.741 39.041C37.1629 38.619 37.4 38.0467 37.4 37.45C37.4 36.8533 37.1629 36.281 36.741 35.859C36.319 35.4371 35.7467 35.2 35.15 35.2C34.5533 35.2 33.981 35.4371 33.559 35.859C33.1371 36.281 32.9 36.8533 32.9 37.45C32.9 38.0467 33.1371 38.619 33.559 39.041C33.981 39.4629 34.5533 39.7 35.15 39.7ZM30.65 30.25C30.65 29.6533 30.4129 29.081 29.991 28.659C29.569 28.2371 28.9967 28 28.4 28C27.8033 28 27.231 28.2371 26.809 28.659C26.3871 29.081 26.15 29.6533 26.15 30.25C26.15 30.8467 26.3871 31.419 26.809 31.841C27.231 32.2629 27.8033 32.5 28.4 32.5C28.9967 32.5 29.569 32.2629 29.991 31.841C30.4129 31.419 30.65 30.8467 30.65 30.25ZM28.4 39.7C28.9967 39.7 29.569 39.4629 29.991 39.041C30.4129 38.619 30.65 38.0467 30.65 37.45C30.65 36.8533 30.4129 36.281 29.991 35.859C29.569 35.4371 28.9967 35.2 28.4 35.2C27.8033 35.2 27.231 35.4371 26.809 35.859C26.3871 36.281 26.15 36.8533 26.15 37.45C26.15 38.0467 26.3871 38.619 26.809 39.041C27.231 39.4629 27.8033 39.7 28.4 39.7Z" fill="#57B860"/>
            </Mask>
            <G mask="url(#mask0_444:6742)">
            <Path d="M45.5 7L11 48.5L45.5 49.5V7Z" fill="#75C97D"/>
            </G>
        </Svg>

    )
}

export default Kalkulator;