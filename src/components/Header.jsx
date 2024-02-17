import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="header-main">
      <img src="/asset/isro.png" alt="" className="gov-img" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          Activities
          <IoIosArrowDown
            size={"20px"}
            style={{ position: "relative", top: "5px", paddingLeft: "4px" }}
          />
        </li>
        <li>
          Services{" "}
          <IoIosArrowDown
            size={"20px"}
            style={{ position: "relative", top: "5px", paddingLeft: "4px" }}
          />
        </li>
        <li>
          Programmes{" "}
          <IoIosArrowDown
            size={"20px"}
            style={{ position: "relative", top: "5px", paddingLeft: "4px" }}
          />
        </li>
        <li>
          Resorces{" "}
          <IoIosArrowDown
            size={"20px"}
            style={{ position: "relative", top: "5px", paddingLeft: "4px" }}
          />
        </li>
        <li>
          Engage with us{" "}
          <IoIosArrowDown
            size={"20px"}
            style={{ position: "relative", top: "5px", paddingLeft: "4px" }}
          />
        </li>
      </ul>
      <div className="search">
        <IoSearch size={"26px"} style={{ color: "white" }} />
        <div className="vertical-line"></div>
        <p className="enn">
          EN
          <IoIosArrowDown
            size={"20px"}
            style={{ position: "relative", top: "5px", paddingLeft: "4px" }}
          />
        </p>
      </div>

      <img src="/asset/gov.png" alt="" className="gov-img" />
    </div>
  );
};

export default Header;
