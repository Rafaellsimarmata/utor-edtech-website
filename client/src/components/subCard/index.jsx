/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./subCard.scss";
import { BookHalf } from "react-bootstrap-icons";

const SubCard = ({ item }) => {
  const hrefLink = `/learn/${item.id_topic}`;
  return (
    <Link to={hrefLink} className="link">
      <div className="gigCard">
        <img src={item.img_url} alt="" />
        <div className="info">
          <h3>{item.judul}</h3>
          <p>{item.desc_topic}</p>
          <div className="star">
            <BookHalf />
            <span id="total">Total Materi : 3</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="../img/heart.png" alt="" />
        </div>
      </div>
    </Link>
  );
};

export default SubCard;
