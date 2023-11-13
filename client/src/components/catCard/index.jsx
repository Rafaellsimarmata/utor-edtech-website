/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./CatCard.scss";

const CatCard = ({ card }) => {
  return (
    <Link to="/paths">
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
};
export default CatCard;
