import "./TitleCards.css";
import { useState, useRef, useEffect } from "react";
import blackArrow from "../../assets/back_arrow_icon.png";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [scroll, setScroll] = useState(false);
  const [apiData, setApiData] = useState([]);
  const cardListRef = useRef(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTNjNWEzZDAwYTRmYmMwMmE1ZmY4ZjFhNDA2OWQxNiIsIm5iZiI6MTY5NTQ4NzUzMS4wMTksInN1YiI6IjY1MGYxNjJiYTkxMTdmMDEzODUyNTBjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f-Vxr7gpbP_RsjeqMhtTsMT_JuhZ_uPGJVQIrAoj2uU",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, []);

  const handleSlideRight = () => {
    if (cardListRef.current) {
      const scrollAmount = cardListRef.current.offsetWidth;
      cardListRef.current.scrollLeft += scrollAmount;
    }
  };

  const handleSlideLeft = () => {
    if (cardListRef.current) {
      const scrollAmount = cardListRef.current.offsetWidth;
      cardListRef.current.scrollLeft -= scrollAmount;
    }
  };

  return (
    <div
      className="titlecards"
      onMouseEnter={() => setScroll(true)}
      onMouseLeave={() => setScroll(false)}
    >
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <img
        className={`arrow-left ${scroll ? "visible" : ""}`}
        src={blackArrow}
        alt="Scroll Left"
        onClick={handleSlideLeft}
      />

      {/* Card List */}
      <div className="card-list" ref={cardListRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
              alt={card.original_title}
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>

      {/* Right Arrow */}
      <img
        src={blackArrow}
        alt="Scroll Right"
        className={`arrow-right ${scroll ? "visible" : ""}`}
        onClick={handleSlideRight}
      />
    </div>
  );
};

export default TitleCards;
