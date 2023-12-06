/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./subCard.scss";
import { BookHalf } from "react-bootstrap-icons";

const SubCard = ({ isRegistered, item }) => {
  const redirectPage = () => {
    if (!isRegistered && item.ispremium) {
      alert("Anda belum terdaftar, Silahkan lakukan pendaftaran kelas");
    } else {
      window.location = `/learn/${item.id_topic}`;
    }
  };

  return (
    <Link onClick={redirectPage} className="link">
      <div className="gigCard">
        <img src={item.img_url} alt="" />
        <div className="info">
          <h3>{item.judul}</h3>
          <p>{item.desc_topic.substring(0, 90)}...</p>
          <div className="star">
            <div className="ket">
              <BookHalf />
              <span id="total">Total Materi : 3</span>
            </div>
            {item.ispremium ? (
              <p style={{ backgroundColor: "yellow" }}> Premium</p>
            ) : (
              <p style={{ backgroundColor: "#88f549" }}> Free</p>
            )}
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
