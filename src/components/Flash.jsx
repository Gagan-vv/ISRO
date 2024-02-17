import React, { useEffect, useState } from "react";

const Flash = () => {
  const item = [
    "ISRO to launch INSAT-3DS on Feb 17, will improve forecast",
    "XPoSat gives a peak into first light, ready to study pulsars and black holes: ISRO",
    "Science Minister hosts 200 women scientists from ISRO",
    "ISRO gears up for launch of meteorological satellite, flags it off to Sriharikota spaceport",
    "ISRO’s space platform POEM-3 achieves all payload objectives, set to re-enter Earth",
  ];
  const [activeItems, setActiveItems] = useState(Array(5).fill(false));
  const [currentIndex, setCurrentIndex] = useState(0);

  let curindx = -1;
  useEffect(() => {
    const intervalId = setInterval(() => {
      curindx = (curindx + 1) % item.length;
      const newActiveItems = [...activeItems];
      newActiveItems[curindx] = !newActiveItems[curindx];
      setCurrentIndex(curindx);
      setActiveItems(newActiveItems);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flash">
      <span className="flash-tile">Flash News</span>
      <span className="flas-desc">{item[currentIndex]}</span>
      {item.map((item, index) => (
        <div
          class="dot"
          style={{ backgroundColor: activeItems[index] ? "white" : "black" }}
        ></div>
      ))}
    </div>
  );
};

export default Flash;
