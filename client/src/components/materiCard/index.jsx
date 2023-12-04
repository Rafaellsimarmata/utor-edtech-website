/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BookHalf, Trash } from "react-bootstrap-icons";

const MateriCard = ({ item, setIdTopic, setActiveTopic, buttonFunc }) => {
  // const hrefLink = `/learn/${item.id_topic}`;
  return (
    <Link
      onClick={() => {
        setIdTopic();
        setActiveTopic();
      }}
      className="link"
    >
      <div className="gigCard">
        <img src={item.img_url} alt="" />
        <div className="info">
          <h3>{item.judul}</h3>
          <p>{item.desc_topic.substring(0, 90)}...</p>
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

export default MateriCard;
