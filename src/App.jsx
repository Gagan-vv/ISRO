import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Flash from "./components/Flash";
import Footer from "./components/Footer";
import Header from "./components/Header";
import KeyLinks from "./components/KeyLinks";
import News from "./components/News";
import Portal from "./components/Portal";
import Updates from "./components/Updates";
import Map from "./components/Map";
import { useMediaQuery } from 'react-responsive';


function App() {
  const ind = [
    "url(/asset/banner/earth.jpg)",
    "url(/asset/banner/moon.webp)",
    "url(/asset/banner/adtiya.jpg)",
    "url(/asset/banner/pslv.webp)",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ind.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1400px)",
  });

  return (
    <>
      {isDesktopOrLaptop && (
        <>
          <div
            className="banner"
            style={{ backgroundImage: ind[currentIndex] }}
          >
            <div className="gradient-main"></div>
            <Header />
            <Banner />
          </div>
          <Flash />
          <KeyLinks />
          <News />
          <Portal />
          <Updates />
          <Map />
          <Footer />
        </>
      )}
      {!isDesktopOrLaptop &&( 
        <div style={{color:'white',textAlign:'center',fontSize:'5em'}}> Cannot show content change screen size</div>
      )}
    </>
  );
}

export default App;
