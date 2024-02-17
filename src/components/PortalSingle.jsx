import React, { useState } from "react";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";

const PortalSingle = ({item}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Define the style dynamically based on hover state
  const boxStyle = {
    backgroundImage:
    isHovered ? `linear-gradient(to right,rgb(37, 37, 37),${item.color})` : 'none',
    transition: "background-color 0.3s ease", // Optional: Add transition for smooth color change
  };
  return (
    <div
      className="portal-tile"
      style={boxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    <img src={item.image} alt="spark" className="portal-logo"/>
      <TbCircleArrowUpRightFilled size={"26px"} className="portal-icon"/>
      <div className="portal-title">{item.title}</div>
      <div className="portal-desc">{item.desc}</div>
    </div>
  );
};

export default PortalSingle;
