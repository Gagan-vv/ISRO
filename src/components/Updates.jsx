import React from "react";

const Updates = () => {
  const index = [
    {
      title: "PSLV-C58/XPoSaT Mission",
      desc: "Is a mission by the Indian Space Research Organisation (ISRO). The mission launched XPoSat, India's first satellite to measure space-based polarization of X-rays emitted from celestial sources, into an elliptical orbit on January 1, 2024",
      image: "/asset/update/1.webp",
    },
    {
      title: "Aditya L1 Mission",
      desc: "An Indian solar observatory at Lagrangian point L1 for “Observing and understanding the chromospheric and coronal dynamics of the Sun” in a continuous manner",
      image: "/asset/update/2.avif",
    },
    {
      title: "Gaganyaan Mission",
      desc: "Full-scale test article for Test Vehicle Abort Mission-1. Gaganyaan crew module is a fully autonomous 5.3 t (12,000 lb) spacecraft designed to carry a 3-member crew to orbit and safely return to the Earth after a mission duration of up to seven days.",
      image: "/asset/update/3.jpeg",
    },
    {
      title: "Halo Orbit Mission",
      desc: "Halo-Orbit Insertion (HOI) of its solar observatory spacecraft, Aditya-L1 was accomplished at 16.00 Hrs (approx) on January 6, 2024 (IST). The final phase of the maneuver involved firing of control engines for a short duration.",
      image: "/asset/update/4.jpg",
    },
  ];
  return (
    <div className="updates">
      <h1 className="keylink-title">Recent Updates</h1>
      <span className="keylink-desc">
        Stay up to date with latest ISRO programme
      </span>
      {index.map((item) => (
        <div className="update-tile">
          <div className="gra"></div>
          <img src={item.image} alt="" className="update-img" />
          <div className="movement">
            <div className="update-title">{item.title}</div>
            <div className="update-desc">{item.desc}</div>
            <button className="read">Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Updates;
