import React, { useState, useEffect } from 'react';

const TextSlider = ({ texts, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return (
    <div className="text-slider">
      {texts.map((text, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'text-slide active' : 'text-slide'}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default TextSlider;
