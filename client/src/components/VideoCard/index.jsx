/* eslint-disable react/prop-types */

import { PlayBtn, Trash } from "react-bootstrap-icons";
import { Link, Navigate } from "react-router-dom";

const VideoCard = ({ item, setcurrMateri }) => {
  return (
    <div className="item">
      <div className="judulvideo">
        <PlayBtn />
        <span>{item.judul_materi}</span>
      </div>
      <button onClick={setcurrMateri}>
        <Trash />
      </button>
    </div>
  );
};

export default VideoCard;
