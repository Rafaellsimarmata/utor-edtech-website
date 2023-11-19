/* eslint-disable react-hooks/rules-of-hooks */
import "./learn.scss";
import { SubCard, Spinner } from "../../components";
import { Link, useParams } from "react-router-dom";
import { usePath } from "../../context/pathContext";
import ReactPlayer from "react-player/youtube";
import LearnVideoCard from "../../components/LearnVideoCard";
import { useEffect, useState } from "react";

const profile =
  "https://raw.githubusercontent.com/vikas-parmar/vikas-parmar.github.io/main/assets/portrait-1.png";

const Learn = () => {
  const { listMateri, setIdTopic } = usePath();
  const { id } = useParams();

  setTimeout(() => {
    setIdTopic(id);
  }, 0);

  if (!listMateri || !listMateri[0]) {
    return (
      <>
        <Spinner size={100} loading />
      </>
    );
  }

  // console.log(listMateri);
  const [currMateri, setcurrMateri] = useState(listMateri[0]);

  console.log(currMateri);

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
            <div className="seller">
              <h2>About The Mentor</h2>
              <div className="user">
                <img src={profile} alt="" />
                <div className="info">
                  <span>Vikas Parmar</span>
                  <div className="stars">
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <span>5</span>
                  </div>
                  <Link to="https://vikas-parmar.github.io/" target="_blank">
                    <button>Contact Me</button>
                  </Link>
                </div>
              </div>
              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    <span className="desc">India</span>
                  </div>
                  <div className="item">
                    <span className="title">Member since</span>
                    <span className="desc">May 2023</span>
                  </div>
                  <div className="item">
                    <span className="title">Avg. response time</span>
                    <span className="desc">4 hours</span>
                  </div>
                  <div className="item">
                    <span className="title">Last delivery</span>
                    <span className="desc">1 day</span>
                  </div>
                  <div className="item">
                    <span className="title">Languages</span>
                    <span className="desc">Hindi, English</span>
                  </div>
                </div>
                <hr />
                <p>
                  Hi there! I am a frontend developer with expertise in HTML,
                  CSS, and JavaScript, and I am looking for exciting projects to
                  work on. I specialize in creating stunning and user-friendly
                  interfaces that enhance the user experience and help
                  businesses achieve their goals. <br />
                  <br />I take pride in my attention to detail and commitment to
                  excellence, ensuring that I deliver high-quality work on time
                  and within budget. Whether you need a simple landing page or a
                  complex web application, I have the skills and experience to
                  bring your digital vision to life.
                </p>
              </div>
            </div>
            <div className="reviews">
              <h2>Reviews</h2>
              <div className="item">
                <div className="user">
                  <img
                    className="pp"
                    src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="info">
                    <span>Garner David</span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                      />
                      <span>United States</span>
                    </div>
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
                <p>
                  Absolutely blown away by the expertise and dedication shown by
                  this developer! They transformed my vague ideas into a
                  cutting-edge website that surpassed my expectations. The
                  attention to detail and seamless communication throughout the
                  project made the entire process smooth. I highly recommend
                  their services to anyone seeking a top-notch web developer.
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
                </div>
              </div>
              <hr />
              <div className="item">
                <div className="user">
                  <img
                    className="pp"
                    src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="info">
                    <span>Sidney Owen</span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                        alt=""
                      />
                      <span>Germany</span>
                    </div>
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
                <p>
                  Incredible experience working with this frontend developer.
                  Their proficiency in ReactJS and design skills truly shine.
                  They converted my complex design mockups into a responsive
                  masterpiece that works flawlessly across devices. The final
                  product is a testament to their commitment to quality and
                  innovation. {"I'm"} thrilled with the results!
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
                </div>
              </div>
              <hr />
              <div className="item">
                <div className="user">
                  <img
                    className="pp"
                    src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="info">
                    <span>Lyle Giles </span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                      />
                      <span>United States</span>
                    </div>
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
                <p>
                  I {"can't"} thank this developer enough for their exceptional
                  work! They flawlessly translated my intricate Figma design
                  into clean HTML, CSS, and JavaScript code. The attention they
                  paid to each pixel and animation detail is outstanding. The
                  end result is a website that captures the essence of my
                  vision. A truly talented professional!
                </p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="price">
              <h3>💎 List Materi ✨</h3>
              <h2>{listMateri.length} video</h2>
            </div>
            <p>
              Bring your design in Fully responsive Web App with advance React
              Functionality with API integration.
            </p>
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
