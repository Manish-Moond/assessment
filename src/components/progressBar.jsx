import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";

const ProgressBar = ({ currentTime, duration, pauseBtn }) => {
  const progress = (currentTime / duration) * 100;

  return (
    <div className="progress-bar">
      <button onClick={pauseBtn} className="pause-btn">
        <FontAwesomeIcon icon={faPause} className="btn" />
      </button>
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
