import React, { useEffect, useRef, useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const News = () => {
  const item = [
    {
      min: "5",
      text: "POLIX onboard XPoSat commences its observations",
      image: "/asset/news/1.jpg",
    },
    {
      min: "8",
      text: "GSLV-F14/INSAT-3DS MISSION",
      image: "/asset/news/2.jpg",
    },
    {
      min: "4",
      text: "INSAT-3DS Satellite Flagged off to SDSC-SHAR",
      image: "/asset/news/3.jpg",
    },
    {
      min: "6",
      text: "POEM-3 Mission achieves all its Payload objectives",
      image: "/asset/news/4.jpg",
    },
    {
      min: "10",
      text: "SSPACE/IIST lends tracking support to space startup",
      image: "/asset/news/5.png",
    },
    {
      min: "3",
      text: "Successful Deployment of Magnetometer Boom on Aditya-L1 in Halo Orbit",
      image: "/asset/news/6.jpg",
    },
    {
      min: "4",
      text: "Instrument on Chandrayaan-3 lander started serving as a location marker near lunar south pole",
      image: "/asset/news/7.jpg",
    },
    {
      min: "15",
      text: "Inauguration of Second Generation Distress Alert Terminal",
      image: "/asset/news/8.jpg",
    },
  ];
  const contentRef = useRef(null);
  const [divWidth, setDivWidth] = useState(null);

  useEffect(() => {
    if (contentRef.current) {
      // Get the width of the div
      const width = contentRef.current.offsetWidth;
      setDivWidth(width);
    }
  }, []);

  const scrollLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft -= divWidth + 120; // Adjust the scrolling distance as needed
    }
  };

  const scrollRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft += divWidth + 120; // Adjust the scrolling distance as needed
    }
  };
  return (
    <>
      <div className="news">
        <h1 className="keylink-title">Latest News</h1>
        <span className="keylink-desc">
          Stay up to date with the lastest from indian space sector{" "}
        </span>
        <div className="main-news" ref={contentRef}>
          {item.map((item) => (
            <div className="news-tile">
              <div className="gradient"></div>
              <img src={item.image} alt="" className="news-img" />
              <div className="news-detail">
                <div>
                  <span className="news-title">{item.min} Min Read</span>
                </div>
                <div className="news-desc">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="news" style={{ color: "white", marginBottom: "70px" }}>
        <button className="scroll-button left" onClick={scrollLeft}>
          <FaRegArrowAltCircleLeft size={"26px"} className="arrrow-icon" />{" "}
          {/* Left arrow symbol */}
        </button>
        <button className="scroll-button right" onClick={scrollRight}>
          <FaRegArrowAltCircleRight size={"26px"} className="arrrow-icon" />{" "}
          {/* Right arrow symbol */}
        </button>
      </div>
    </>
  );
};

export default News;
