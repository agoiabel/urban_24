import React from 'react';

const TwitterSvg = ({color}) => {

    const fillColor = color.length ? color : '#55ACEE';
    
    return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <rect x="15" y="11" width="70" height="70" rx="35" fill={fillColor} />
            </g>
            <path d="M69 34.6697C67.6017 35.2921 66.0992 35.7127 64.5222 35.902C66.132 34.9334 67.3681 33.3997 67.9501 31.5723C66.4198 32.4839 64.7455 33.1262 62.9996 33.4714C61.5774 31.9505 59.5514 31 57.3089 31C53.0033 31 49.5125 34.504 49.5125 38.8258C49.5125 39.4392 49.5816 40.0364 49.7144 40.6094C43.2351 40.2829 37.4906 37.1673 33.6453 32.4325C32.9744 33.5884 32.5899 34.9329 32.5899 36.3669C32.5899 39.0821 33.9664 41.4773 36.0582 42.8808C34.8201 42.8419 33.6093 42.5062 32.5268 41.9018C32.5264 41.9346 32.5264 41.9674 32.5264 42.0003C32.5264 45.7921 35.2137 48.9552 38.7801 49.6741C37.632 49.9875 36.4278 50.0334 35.2594 49.8082C36.2514 52.9174 39.1307 55.1799 42.5421 55.2432C39.8739 57.3421 36.5122 58.5933 32.8598 58.5933C32.2304 58.5933 31.6099 58.5562 31 58.4839C34.4501 60.7044 38.548 62 42.9507 62C57.2908 62 65.1323 50.0749 65.1323 39.7334C65.1323 39.3939 65.1249 39.0564 65.1098 38.7209C66.636 37.6133 67.9534 36.2414 69 34.6697Z" fill="#FAFAFA" />
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

TwitterSvg.defaultProps = {
    color: '#55ACEE'
}

export default TwitterSvg;