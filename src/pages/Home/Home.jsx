import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
import banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import playIcon from "../../assets/Play_icon.png";
import infoIcon from "../../assets/Info_icon.png";
import videoTrailer from "../../assets/video-trailer.mp4";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const videoRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsVideoVisible(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={banner} alt="" className="banner-img" />
        <video
          ref={videoRef}
          className={`trailer-video ${isVideoVisible ? "visible" : ""}`}
          muted
        >
          <source src={videoTrailer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={playIcon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={infoIcon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top picks for you"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
