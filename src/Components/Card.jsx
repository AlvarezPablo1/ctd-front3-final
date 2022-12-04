import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  setFavInStorage,
  isFavorited,
  removeFavInStorage,
} from "./utils/localStorage.service";
import { ContextGlobal } from "./utils/global.context";
import styles from "./modules/Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(() => isFavorited(id));
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const isFavorite = (favorite) => {
    setFavorite(favorite);
  };

  const addFav = () => {
    const favorite = setFavInStorage({ name, username });
    isFavorite(favorite);
  };

  const removeFav = () => {
    const favorite = removeFavInStorage(id);
    isFavorite(favorite);
    navigate("/home")
  };

  return (
    <div className={`card ${isDarkMode ? styles.cardDark : ""}`}>
      <img
        className="card-img-top"
        src="/images/doctor.jpg"
        alt="doctor placeholder"
      />
      <div className={`card-body ${styles.CardBody}`}>
        <Link to={`/dentist/${id}`}>
          <button type="button" className= {`btn btn-${isDarkMode ? "dark" : "primary"}`}>See more</button>
        </Link>
          <h5 className={`card-title ${styles.title}`}>{name}</h5>
        <p className="card-text">{username}</p>
        <button
          onClick={favorite ? removeFav : addFav}
          className={`btn btn-${isDarkMode ? "dark" : "light"} ${
            styles.favButton
          }`}
        >
          {favorite ? "❌ Unfavorite your Doc" : "⭐ Favorite your Doc"}
        </button>
      </div>
    </div>
  );
};

export default Card;
