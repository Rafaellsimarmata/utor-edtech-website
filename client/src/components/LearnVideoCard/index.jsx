/* eslint-disable react/prop-types */

import { PlayBtn, CheckCircle, CheckCircleFill } from "react-bootstrap-icons";
import { Link, Navigate } from "react-router-dom";

const VideoCard = ({ item, setcurrMateri }) => {
  return (
    <button onClick={setcurrMateri}>
      <div className="judulvideo">
        <PlayBtn />
        <span>{item.judul_materi}</span>
      </div>
      <div className="check">
        <CheckCircle />
      </div>
    </button>
  );
};

export default VideoCard;
