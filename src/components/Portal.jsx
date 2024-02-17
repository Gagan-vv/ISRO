import React from "react";
import PortalSingle from "./PortalSingle";

const Portal = () => {
  const index = [
    {
      title: "SPARK",
      desc: "India's first virtual space tech museum. Explore all the achievements of ISRO and learn",
      color: "rgb(32, 32, 222,0.4)",
      image: "/asset/portal/spark.png",
    },
    {
      title: "ISRO STEM",
      desc: "Knowledge portal on Space Education, explore Space technology and it's applications.",
      color: "rgb(220, 150, 20,0.4)",
      image: "/asset/portal/stem.png",
    },
    {
      title: "I GRASP",
      desc: "ISRO Grant in Aid for Space Research The portal invites proposals from academic.",
      color: "rgb(247, 154, 169,0.4)",
      image: "/asset/portal/igrasp.png",
    },
    {
      title: "VEDAS",
      desc: "Visualisation of Earth Observation Data and Archival System portal.",
      color: "rgb(217, 194, 151,0.4)",
      image: "/asset/portal/vedas.webp",
    },
    {
      title: "BHUVAN",
      desc: "Indan Geo-platform of space research organization for Visualisation portal.",
      color: "rgb(224, 63, 63,0.4)",
      image: "/asset/portal/bhuvan.webp",
    },
    {
      title: "MOSADAC",
      desc: "Meteorological and Oceanographic Satellite Data Archiwal Centre portal.",
      color: "rgb(227, 227, 55,0.4)",
      image: "/asset/portal/mosdac.webp",
    },
    {
      title: "ISSDC",
      desc: "ISSDC is the main data center for Indian Space Science Mission payload.archives.",
      color: "rgb(142, 122, 181,0.4)",
      image: "/asset/portal/issdc.webp",
    },
    {
      title: "BHOONIDHI",
      desc: "Bhoonidhi enables access to our extensive of Remote Sensing data from satelites.",
      color: "rgb(140, 185, 189,0.4)",
      image: "/asset/portal/bhooo.webp",
    },
    {
      title: "NDEM",
      desc: "National Database for Emergency Management INDEM) is a unique Geo-portal.",
      color: "rgb(155, 68, 68,0.4)",
      image: "/asset/portal/nedm.webp",
    },
  ];
  return (
    <div className="portal">
      <h1 className="keylink-title">ISRO Portal</h1>
      <span className="keylink-desc">Links to all ISRO portal at one place</span>
      {index.map((item) => (
        <PortalSingle item={item} />
      ))}
    </div>
  );
};

export default Portal;
