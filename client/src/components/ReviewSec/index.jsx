/* eslint-disable react/prop-types */

const PathCard = ({ item }) => {
  return (
    <>
      <div className="item">
        <div className="user">
          <img className="pp" src={item.img_user} alt="" />
          <div className="info">
            <span>{item.nama_user}</span>
          </div>
        </div>
        <div className="stars">
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <span>5</span>
        </div>
        <p>{item.review}</p>
        <div className="helpful">
          <span>Helpful?</span>
          <img src="/img/like.png" alt="" />
          <span>Yes</span>
          <img src="/img/dislike.png" alt="" />
          <span>No</span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default PathCard;

