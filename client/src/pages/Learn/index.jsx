/* eslint-disable react-hooks/rules-of-hooks */
import "./learn.scss";
import { Spinner } from "../../components";
import { useParams } from "react-router-dom";
import { usePath } from "../../context/pathContext";
import ReactPlayer from "react-player/youtube";
import LearnVideoCard from "../../components/LearnVideoCard";
import { useState } from "react";
import { useUser } from "../../context/userContext";
import { useOrder } from "../../context/orderContext";

const Learn = () => {
  const { listMateri, setIdTopic, detailTopic } = usePath();
  const { id } = useParams();
  const { userData } = useUser();
  const { isRegistered, setidCurrPath, setIdUser } = useOrder();

  setTimeout(() => {
    setIdTopic(id);
  }, 0);

  if (!listMateri || !listMateri[0] || !detailTopic || !userData) {
    return (
      <>
        <Spinner size={100} loading />
      </>
    );
  }

  setTimeout(() => {
    setidCurrPath(detailTopic.id_topic);
    setIdUser(userData.id);
  }, 0);

  // console.log(listMateri);
  const [currMateri, setcurrMateri] = useState(listMateri[0]);

  return (
    <>
      <div className="gig">
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
              Fiverr / Programming & Tech / Website Development / Custom
              Websites
            </span>
            <h1> {currMateri.judul_materi} </h1>
            <div className="videoplayer">
              <ReactPlayer
                url={currMateri.url_vid}
                controls
                width="100%"
                height="350%"
                style={{ backgroundColor: "#000000" }}
                playing={true}
              />
            </div>
            <div className="gig-description">
              <p>
                Description : <br />
              </p>
              <p>{currMateri.description}</p>
            </div>
          </div>
          <div className="right">
            <div className="price">
              <h3>💎 List Materi ✨</h3>
              <h2>{listMateri.length} video</h2>
            </div>
            <p>Berikut adalah List Video Yang tersedia :</p>
            {listMateri.map((materi, i) => (
              <LearnVideoCard
                key={materi.id_materi}
                item={materi}
                setcurrMateri={() => {
                  setcurrMateri(listMateri[i]);
                  console.log("cklic");
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
