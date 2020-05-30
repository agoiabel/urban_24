import React from 'react';

const FacebookSvg = ({color}) => {

    const fillColor = color.length ? color : '#395185';

    return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <rect x="15" y="11" width="70" height="70" rx="35" fill={fillColor} />
            </g>
            <path d="M52.7362 62V47.8595H57.1587L57.8208 42.3487H52.7362V38.8302C52.7362 37.2346 53.1491 36.1473 55.281 36.1473L58 36.146V31.2172C57.5295 31.1501 55.9156 31 54.038 31C50.1176 31 47.4338 33.5682 47.4338 38.2846V42.3487H43V47.8595H47.4338V62H52.7362Z" fill="white" />
            <defs>
                <filter id="filter0_d" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

FacebookSvg.defaultProps = {
    color: '#395185'
}

export default FacebookSvg;