"use client";

import { FC, HTMLAttributes } from "react";

interface Props {
    className: string;
}

const SupportBoxSVG: FC<HTMLAttributes<HTMLOrSVGElement> & Props> = ({ className }) => {
    return (
        <div className={className}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 411 370"
            fill="none"
            className="h-full w-full object-cover"
        >
            <g filter="url(#filter0_b_95_158)">
                <path
                    d="M343.43 0H32C14.3269 0 0 14.3269 0 32V338C0 355.673 14.3269 370 32 370H379C396.673 370 411 355.673 411 338V67.9451C411 59.5163 407.674 51.4279 401.746 45.4366L366.175 9.49151C360.165 3.41764 351.975 0 343.43 0Z"
                    fill="url(#paint0_linear_95_158)"
                    fill-opacity="0.16"
                />
                <path
                    d="M32 1H343.43C351.708 1 359.642 4.31084 365.465 10.1949L401.035 46.14C406.778 51.944 410 59.7797 410 67.9451V338C410 355.121 396.121 369 379 369H32C14.8792 369 1 355.121 1 338V32C1 14.8792 14.8792 1 32 1Z"
                    stroke="url(#paint1_linear_95_158)"
                    stroke-width="2"
                />
            </g>
            <defs>
                <filter
                    id="filter0_b_95_158"
                    x="-2"
                    y="-2"
                    width="415"
                    height="374"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_95_158"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_95_158"
                        result="shape"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_95_158"
                    x1="205.5"
                    y1="-1.51066e-05"
                    x2="351.37"
                    y2="175.815"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#1B1C36" />
                    <stop offset="1" stop-color="#70717A" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_95_158"
                    x1="411"
                    y1="347.439"
                    x2="-33.3968"
                    y2="273.144"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="white" stop-opacity="0.07" />
                    <stop offset="1" stop-color="white" stop-opacity="0.15" />
                </linearGradient>
            </defs>
        </svg>

        </div>
    );
};

export default SupportBoxSVG;
