import React, { useEffect } from "react";
import "./CircularProgressBar.css";

const CircularProgressBar = ({ props }) => {
  const { width, progress, strokeColor } = props;
  //circle properties pre defined
  let w = 241;
  let cxp = 120.5 / w;
  let rp = 90.5 / w;
  let sd = 568 / w;
  let sw = 20 / w;
  let fs = 2/ w;

  //customizing according to props
  let circleWidth = cxp * width;
  let circleRadius = rp * width;
  let circleStrokeDash = sd * width;
  let progressBar = (circleStrokeDash / 100) * progress;
  let strokeWidth = sw * width;
  let fontSizes = fs * width;

  //making css variable
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.setProperty("--stroke-arr", circleStrokeDash);
      document.body.style.setProperty("--canvas-width", width);
      document.body.style.setProperty(
        "--stroke-progress",
        circleStrokeDash - progressBar
      );
    }
  });
  return (
    <div className="canvas">
      <div className="progressNumber" style={{fontSize: `${fontSizes}rem`}}>{progress}%</div>
      <svg
        width={width}
        height={width}
        viewBox={`0 0 ${width} ${width}`}
        fill="none"
        // xmlns="http://www.w3.org/2000/svg"
        className="circularProgressbarContainer"
      >
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="90%" y2="90%">
            <stop offset="0%" stop-color={strokeColor[0]} />
            <stop offset="100%" stop-color={strokeColor[1]} />
          </linearGradient>
        </defs>
        <circle
          cx={circleWidth}
          cy={circleWidth}
          r={circleRadius}
          stroke="url(#linear)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        //   strokeDasharray={circleStrokeDash}
        //   strokeDashoffset={circleStrokeDash - progressBar}
          className="circle"
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;
