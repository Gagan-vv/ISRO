import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div style={{ flexBasis: "100%" }}>
          <img src="/asset/isrosingle.png" alt="" className="img-footer" />
        </div>
        <div className="footer-main">
          <span>
            <div className="footer-title">Address</div>
            <div className="footer-desc">
              ISRO Headquarters, Antariksh Bhavan,
              <br /> New BEL Road Bengaluru-560 094 <br />
              Phone: +91 80 22172294 / 96 <br />
              Email: isropr@isro.gov.in
            </div>
            <hr className="ht-css"/>
            <div className="footer-title">
              Social{" "}
              <div >
                <FaFacebook style={{margin:"0 10px"}}/>
                <FaInstagram style={{margin:"0 10px"}}/> <FaSquareXTwitter style={{margin:"0 10px"}}/>
                <FaYoutube style={{margin:"0 10px"}}/>
              </div>
            </div>
          </span>
        </div>
        <div className="footer-main">
          <span>
            <div className="footer-title">Address</div>
            <div className="footer-desc">RTI</div>
            <div className="footer-desc">Contact Us</div>
            <div className="footer-desc">FAQ</div>
            <div className="footer-desc">Feedback</div>
          </span>
        </div>
        <div className="footer-main">
          <span>
            <div className="footer-title">Reports</div>
            <div className="footer-desc">Press Release</div>
            <div className="footer-desc">Publications</div>
            <div className="footer-desc">Annual Report</div>
            <div className="footer-desc">ISM Data Sheets</div>
          </span>
        </div>
        <div className="footer-main">
          <span>
            <div className="footer-title">Govt Portals</div>
            <div className="footer-desc">National Voters Service</div>
            <div className="footer-desc">CSSTEAP</div>
            <div className="footer-desc">PIB</div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
