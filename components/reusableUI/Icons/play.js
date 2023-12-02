import React from "react";

function play() {
  return (
    <>
      <svg width={58} height={58} viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_dd_68_5865)">
          <circle cx={29} cy={28} r={26} fill="#17A1FA" />
        </g>
        <path d="M39 28L25.5 35.7942L25.5 20.2058L39 28Z" fill="#F8FAFC" />
        <defs>
          <filter id="filter0_dd_68_5865" x={0} y={0} width={58} height={58} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation={1} />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_68_5865" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_68_5865" result="effect2_dropShadow_68_5865" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_68_5865" result="shape" />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default play;
