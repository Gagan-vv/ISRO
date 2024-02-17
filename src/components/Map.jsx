import React, { useState } from "react";

const Map = () => {
  const color = {
    color: "rgb(246, 168, 22)",
    borderBottom: "5px solid rgb(246, 168, 22)",
  };
  const index = ["ISRO Centers", "IN-SPACs", "CPSEs", "Autonomous"];
  const [ind, setInd] = useState(0);
  const handleClick = (ind) => {
    setInd(ind);
  };

  const HQ = [
    [
      {
        img: "asset/site/isro.webp",
        title: "Headquaters",
        desc: "Department of Space and ISRO HQ",
      },
      {
        img: "asset/site/hsfc.png",
        title: "HSFC",
        desc: "Human Space Flight Centre",
      },
      {
        img: "asset/site/iirs.PNG",
        title: "IIRS",
        desc: "Indian Institute of Remote Sensing",
      },
      {
        img: "asset/portal/nedm.webp",
        title: "IISU",
        desc: "ISRO Inertial Systems Unit",
      },
      {
        img: "asset/site/iprc.jpg",
        title: "IPRC",
        desc: "ISRO Propulsion Complex",
      },
      {
        img: "asset/site/istrac.jpg",
        title: "ISTRAC",
        desc: "ISRO Telemetry, Tracking and Command Network",
      },
      {
        img: "asset/site/isro.webp",
        title: "LEOS",
        desc: "Laboratory for Electro-Optics Systems",
      },
      {
        img: "asset/site/lpsc.jpg",
        title: "LPSC",
        desc: "Liquid Propulsion Systems Centre",
      },
      {
        img: "asset/site/mcf.png",
        title: "MCF",
        desc: "Master Control Facility",
      },
      {
        img: "asset/site/nsrc.jpg",
        title: "NRSC",
        desc: "National Remote Sensing Centre",
      },
      {
        img: "asset/portal/nedm.webp",
        title: "SDSC",
        desc: "Satish Dhawan Space Centre",
      },
      {
        img: "asset/site/sac.png",
        title: "SAC",
        desc: "Space Applications Centre ",
      },
      {
        img: "asset/site/ursc.png",
        title: "URSC",
        desc: "U R Rao Satellite Centre ",
      },
      {
        img: "asset/site/vssc.png",
        title: "VSSC",
        desc: "Vikram Sarabhai Space Centre ",
      },
    ],
    [
      {
        img: "asset/site/inspac.png",
        title: "IN-SPACe ",
        desc: "Indian National Space Promotion and Authorization Center",
      },
    ],
    [
      {
        img: "asset/site/antri.jpg",
        title: "ACL",
        desc: "Antrix Corporation Limited",
      },
      {
        img: "asset/site/nsil.png",
        title: "NSIL",
        desc: "NewSpace India Limited",
      },
    ],
    [
      {
        img: "asset/site/iist.png",
        title: "IIST",
        desc: "Indian Institute of Space Science and Technology ",
      },
      {
        img: "asset/site/narl.jpg",
        title: "NARL",
        desc: "National Atmospheric Research Laboratory",
      },
      {
        img: "asset/site/nesac.png",
        title: "NE-SAC",
        desc: "North Eastern-Space Applications Centre",
      },
      {
        img: "asset/site/prl.png",
        title: "PRL",
        desc: "Physical Research Laboratory ",
      },
    ],
  ];
  return (
    <div className="updates">
      <h1 className="keylink-title">ISRO Centers & Units</h1>
      <span className="keylink-desc">
        Link to all ISRO Centers,Units and autonomous body
      </span>
      <div className="worldimage">
        <div className="gradientt">
          <div className="sitename">
            <div className="map-head">
              {index.map((item, index) => (
                <div
                  className="title-map"
                  style={ind == index ? color : null}
                  onClick={() => handleClick(index)}
                >
                  {item}
                </div>
              ))}
            </div>
            <hr className="hr-map" />
            <div className="scroll-bar">
              {HQ[ind].map((item, id) => (
                <div className="map-desc">
                  <div className="tilee">
                    <div>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="map-logo"
                      />
                    </div>
                    <div className="map-tile">
                      <div className="title-map-tile">{item.title}</div>
                      <div className="title-map-desc">{item.desc}</div>
                    </div>
                  </div>
                  {id < HQ[ind].length - 1 && <hr className="hr-map1" />}
                </div>
              ))}
            </div>
          </div>
          <div className="india">
            <img src="/asset/india.png" alt="india" className="indiacss"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
