import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./progressBar";
import clockImg from "../assets/clock.png";


export default function MainComponent() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const navigate = useNavigate();

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const handleClick = () => {
    navigate("/assessment", {replace:true});
  }

  return (
    <div className="main">
      <div className="card">
        <div className="custom-video-container">
          <video
            ref={videoRef}
            className="video"
            src="https://40parables-assets.s3.amazonaws.com/bleat-AI-PulseCheck-Intro.mp4"
          ></video>
          <div className="custom-controls">
            {!isPlaying ? (
              <button className="play-btn" onClick={togglePlayPause}>
                <FontAwesomeIcon icon={faPlay} className="btn" />
                WATCH VIDEO
              </button>
            ) : (
              <ProgressBar
                currentTime={currentTime}
                duration={duration}
                pauseBtn={togglePlayPause}
              />
            )}
          </div>
        </div>
        <div className="intro">
          <h1>
            <span className="text-purple">Is your church embracing impact</span>{" "}
            or AI* hesitant?
          </h1>
          <div className="intro-points-list">
            <p>1. Take this 3-minute assessment</p>
            <p>2. Invite your team to take it too after you do</p>
            <p>3. View everyone's results on 1 dashboard</p>
            <p>
              4. Align on the best next step for your church's approach to AI
            </p>
          </div>
          <div className="completion">
            <button className="get-started" onClick={handleClick}>GET STARTED</button>
            <div className="time-estimate">
              <img src={clockImg} alt="" />
            </div>
            <span style={{ paddingBottom: "4px" }}>3 min</span>
          </div>
          <h5 style={{ paddingTop: "12px", fontWeight: "700" }}>
            *Artificial Intelligence
          </h5>
          <p
            style={{ fontSize: "12px", paddingTop: "8px", paddingRight: "4px" }}
          >
            <span style={{ fontWeight: "600" }}>
              {" "}
              If you aren't a Senior/Lead/Executive Pastor,
            </span>{" "}
            please ask one of them on your team to first take this test -
            ctt1.bleat.church. That test's result will generate a team link so
            you and other team members can then take this same test afterward as
            a team.
          </p>
        </div>
      </div>
    </div>
  );
}
