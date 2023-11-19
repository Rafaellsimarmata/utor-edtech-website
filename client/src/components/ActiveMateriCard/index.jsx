/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BookHalf, Trash } from "react-bootstrap-icons";

const ActiveMateriCard = ({ item, setIdTopic, setActiveTopic, buttonFunc }) => {
  // const hrefLink = `/learn/${item.id_topic}`;
  return (
    <div className="gigCard">
      <img src={item.img_url} alt="" />
      <div className="info">
        <h3>{item.judul}</h3>
        <p>{item.desc_topic.substring(0, 110)}</p>
        <div className="star">
          <BookHalf />
          <span id="total">Total Materi : 3</span>
        </div>
        <button style={{ backgroundColor: "yellow", color: "black" }}>
          Edit
        </button>
        <button onClick={buttonFunc}>
          <Trash />
        </button>
      </div>
      <hr />
    </div>
  );
};

export default ActiveMateriCard;
