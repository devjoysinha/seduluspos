"use client";

export default function SceneBackdrop() {
  return (
    <div className="scene-backdrop" aria-hidden="true">
      <div className="scene-haze" />
      <svg
        className="absolute inset-0 w-full h-full opacity-80"
        viewBox="0 0 1440 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="stream-pink">
            <stop stopColor="#60334e" stopOpacity="0" />
            <stop offset=".48" stopColor="#ff9dd7" />
            <stop offset=".6" stopColor="#ff55b4" />
            <stop offset="1" stopColor="#bb8cf4" stopOpacity=".1" />
          </linearGradient>
          <filter id="stream-glow">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>
        <path
          d="M1550 -120C1120 30 1260 150 950 240S480 410 760 540 1290 720 1020 1100"
          fill="none"
          stroke="url(#stream-pink)"
          strokeWidth="65"
          opacity=".24"
          filter="url(#stream-glow)"
        />
        <g fill="none" stroke="url(#stream-pink)" strokeWidth="1" opacity=".4">
          <path d="M1550 -120C1120 30 1260 150 950 240S480 410 760 540 1290 720 1020 1100" />
          <path d="M1590 -90C1130 50 1300 140 990 230S490 400 780 540 1330 740 1060 1140" />
          <path d="M1520 -150C1080 20 1220 160 920 260S470 430 740 570 1250 730 980 1140" />
          <path d="M1600 -100C1160 10 1270 190 970 280S510 380 800 520 1350 780 1040 1160" />
        </g>
      </svg>
      <div className="scene-vignette" />
    </div>
  );
}
