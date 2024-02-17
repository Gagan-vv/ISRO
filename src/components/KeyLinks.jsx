import React from "react";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { FaSuitcase } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { ImHammer2 } from "react-icons/im";
import { FaArrowCircleRight } from "react-icons/fa";

const KeyLinks = () => {
  const indexx = [
    {
      title: "Press Release",
      desc: "Find out the latest press release by ISRO",
      icon: <HiMiniVideoCamera size={"26px"} />,
    },
    {
      title: "Press Release",
      desc: "Find out the latest press release by ISRO",
      icon: <FaSuitcase size={"26px"} />,
    },
    {
      title: "Press Release",
      desc: "Find out the latest press release by ISRO",
      icon: <PiStudentFill size={"26px"} />,
    },
    {
      title: "Press Release",
      desc: "Find out the latest press release by ISRO",
      icon: <ImHammer2 size={"26px"} style={{transform: 'scaleX(-1)'}} />,
    },
  ];
  return (
    <div className="keylink">
      <h1 className="keylink-title">KeyLinks</h1>
      <span className="keylink-desc">
        All the important portal to explore opportunity and information about
        ISRO
      </span>
      {indexx.map((item) => (
        <div className="keylink-box">
          <div className="key-icon">
            {item.icon}  <FaArrowCircleRight size={"26px"} className="arrow-icon"/>
          </div>
          <div className="key-tit">{item.title}</div>
          <div className="key-desc">
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyLinks;
