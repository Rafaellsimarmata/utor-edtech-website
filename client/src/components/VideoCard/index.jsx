/* eslint-disable react/prop-types */

import { PlayBtn, CheckCircleFill, CheckCircle } from "react-bootstrap-icons";
import { Link, Navigate } from "react-router-dom";
import "./Gig.scss";

const VideoCard = ({ item, setcurrMateri }) => {
  return (
    <button onClick={setcurrMateri}>
      <div className="judulvideo">
        <PlayBtn /> {item.judul_materi}
      </div>
      <div className="check">
        <CheckCircle />
      </div>
    </button>
  );
};

export default VideoCard;
