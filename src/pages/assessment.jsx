import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Assessment = () => {
  const [selectedBreakpoint, setSelectedBreakpoint] = useState(null);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [completionPercentage, setCompletionPercentage] = useState([6, 25]);
  const [resStore, setResStore] = useState([]);
  const navigate = useNavigate();

  const questionPreMap = {
    1: [6, 25],
    2: [12, 50],
    3: [18, 75],
    4: [24, 100],
    5: 29,
    6: 35,
    7: 41,
    8: 47,
    9: 53,
    10: 59,
    11: 65,
    12: 71,
    13: 76,
    14: 82,
    15: 88,
    16: 94,
    17: 100,
  };
  const questions = [
    "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
    "Our leadership team knows of the potential risks and rewardsof leveraging AI.",
    "Our leadership team understands the value of tapping experts to educate our staff about AI.",
    "Our church should have an AI policy that guides staff on tools, training, attribution, ethical boundaries, etc.",
    "I have a good idea of how churches, in general, can use AI for ministry.",
    "I am aware some churches are using AI very well in their ministry.",
    "I have some specific ideas or examples of how our church can utilize AI for ministry work.",
    "Some staff and leaders in our church are using AI at work.",
    "AI can save our pastor(s) time and effort invested in sermon preparation by summarizing articles, helping understand various arguments, etc.",
    "AI can be beneficial regarding content creation for social media, blogs, bulletins, videos, etc.",
    "I know we can improve reporting, optimize our processes, and set helpful reminders with AI.",
    "I want to learn how I can use AI for my work.",
    "Our church should actively embrace, to varying degrees, education on AI and AI tools to optimize our ministry operations.",
    "AI tools, like ChatGPT, are not passing trends; AI will not become obsolete anytime soon.",
    "I am not worried about AI due to its ability to harm humanity/take over the world, or other bad scenarios.",
    "Our church leaders can make the right decisions on how our church may or may not leverage AI for ministry.",
    "I am confident that my job/role is not at risk due to AI's potential to replace me at work.",
  ];
  const breakPoints = [
    [0, "Strongly Disagree"],
    [1, "Disagree"],
    [2, "Neutral"],
    [3, "Agree"],
    [4, "Strongly Agree"],
  ];

  const handleBackBtn = () => {
    if (currQuestion == 0) {
      navigate("/", { replace: true });
    } else {
      setCurrQuestion(currQuestion - 1);
      setSelectedBreakpoint(resStore[currQuestion-1])
      setCompletionPercentage(questionPreMap[currQuestion]);
    }
  };

  const handleBreakpointClick = (breakpoint) => {
    setCompletionPercentage(questionPreMap[currQuestion + 2]);
    setSelectedBreakpoint(breakpoint);
    setResStore([...resStore, breakpoint])
    setTimeout(() => {
      setCurrQuestion(currQuestion + 1);
      setSelectedBreakpoint(null);
    }, 1000);
  };

  return (
    <div className="main">
      <div className="assessment-card">
        <div className="progress-bars">
          <div
            className="percentage-label"
            style={{ left: `${45 * (currQuestion + 1.5)}px` }}
          >
            {completionPercentage[0]}%
          </div>
          <div>
            <div className="progress-bar progress-bar1">
              <div
                className="progress"
                style={{ width: `${completionPercentage[1]}%` }}
              ></div>
            </div>
            <p>STRATEGY</p>
          </div>
          <div className=" progress-bar2">
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
            <p>UNDERSTANDING</p>
          </div>
          <div className="progress-bar3">
            <div className="progress-bar ">
              <div className="progress"></div>
            </div>
            <p>APPLICATION</p>
          </div>
          <div className="progress-bar4">
            <div className="progress-bar ">
              <div className="progress"></div>
            </div>
            <p>DIRECTION</p>
          </div>
        </div>

        <div className="question">
          <p>
            <span style={{ fontWeight: "600" }}>{currQuestion + 1}</span>/17
          </p>
          <p className="question-text">{questions[currQuestion]}</p>
        </div>

        <div style={{ position: "relative" }} className="slider">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            {breakPoints.map((breakpoint) => (
              <div
                key={breakpoint[0]}
                onClick={() => handleBreakpointClick(breakpoint[0])}
                className={
                  breakpoint[0] === selectedBreakpoint
                    ? "breakPoint-unselected"
                    : "breakPoint-selected"
                }
              >
                <p
                  style={{
                    paddingTop: "12px",
                    transform: "translate(-250%, 0%)",
                  }}
                >
                  {breakpoint[1]}
                </p>
              </div>
            ))}
            {
              <div
                style={{
                  position: "absolute",
                  border: "5px solid rgb(110, 12, 249)",
                  width: `${selectedBreakpoint * 24}%`,
                  transformOrigin: "top",
                  transition: "width 0.3s ease",
                  borderRadius: "5px",
                  zIndex: 10,
                }}
              ></div>
            }
          </div>
        </div>

        <div className="prev-next-btn">
          <div>
            <button className="pnbtn" onClick={handleBackBtn}>
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
              <span style={{ paddingLeft: "8px" }}>PREV</span>
            </button>
          </div>
          <div>
            <button className="pnbtn">
              <span style={{ paddingRight: "8px" }}>NEXT</span>
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
