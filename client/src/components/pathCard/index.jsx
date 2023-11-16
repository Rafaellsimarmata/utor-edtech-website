/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./GigCard.scss";
import { PeopleFill, BookHalf } from "react-bootstrap-icons";

const PathCard = ({ item, id_path }) => {
  const hrefLink = `/path/${id_path}`;

  return (
    <Link to={hrefLink} className="link">
      <div className="gigCard">
        <img src={item.img_url} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <h3>{item.name_path}</h3>
          <p>{item.description.substring(0, 60)}...</p>
          <div className="star">
            <PeopleFill />
            <span id="total">{item.total_participants}</span>
            <BookHalf />
            <span id="total">
              {item.total_topics} | {item.total_material}
            </span>
          </div>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PathCard;
