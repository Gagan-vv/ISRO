import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Banner = () => {
  const index = [
    {
      sub: "Welcome to",
      title1: "Indian Space ",
      title2: " Research Organization ",
      tt: "ISRO",
    },
    {
      sub: "Mission",
      title1: "Chandrayana",
      desc: "Chandrayaan-3 is a mission by the Indian Space Research Organisation (ISRO) to explore the moon. It's the third mission in the Chandrayaan program, which is a series of lunar-exploration missions.",
      tt: "Chandrayaan 3",
    },
    {
      sub: "Mission",
      title1: "Aditya-L1",
      desc: "Aditya-L1 is a coronagraphy spacecraft designed and developed by the Indian Space Research Organisation (ISRO) and other Indian Space Research Institutes. It is the first Indian space-based mission to study the Sun.",
      tt: "Aditya-L1",
    },
    {
      sub: "Project",
      title1: "PSLV",
      desc:"PSLV stands for Polar Satellite Launch Vehicle. It's a medium-lift launch vehicle designed and operated by the Indian Space Research Organisation (ISRO). PSLV is India's third generation launch vehicle and the first to have liquid stages. Its first successful launch was in October 1994.",
      tt: "PSLV",
    },
  ];
  const changeColorToWhite = keyframes`
  from {
    background-color: rgb(135, 135, 135);
  }
  to {
    background-color: white;
  }
`;

  // Define a styled component with animation
  const AnimatedDiv = styled.div`
    animation: ${changeColorToWhite} 1s linear forwards;
  `;
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % index.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="banner-main">
      <div className="mainn">
        <div className="sub-text">{index[currentIndex].sub}</div>
        <div className="main-text">
          {index[currentIndex].title1} <br />
          {index[currentIndex].title2}
        </div>
        <div className="desx-banner">{index[currentIndex].desc}</div>
      </div>
      <div className="subb-text">
        {index.map((item, ind) =>
          ind == currentIndex ? (
            <AnimatedDiv className="change">
              <div className="txt-bottom">
                {ind == currentIndex ? index[currentIndex].tt : null}
              </div>
            </AnimatedDiv>
          ) : (
            <div className="change">
              <div className="txt-bottom">
                {ind == currentIndex ? index[currentIndex].tt : null}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Banner;
