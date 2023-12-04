import { Slider } from "infinite-react-carousel/lib";
import "./path.scss";
import { SubCard, Spinner } from "../../components";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { useOrder } from "../../context/orderContext";
import { usePath } from "../../context/pathContext";
import orderService from "../../services/order.service";
import toast from "react-hot-toast";
import { Coin } from "react-bootstrap-icons";

const profile =
  "https://raw.githubusercontent.com/vikas-parmar/vikas-parmar.github.io/main/assets/portrait-1.png";

const Path = () => {
  const { id } = useParams();
  const { userData } = useUser();
  const { isRegistered, setidCurrPath, setIdUser } = useOrder();
  const { detailPath, setPathId, itemsPath, setIdMentor, mentorData } =
    usePath();

  setTimeout(() => {
    setPathId(id);
    setidCurrPath(id);
    setIdMentor(detailPath[0].id_mentor);
  }, 0);

  if (!detailPath || !detailPath[0] || !itemsPath || !userData || !mentorData) {
    return (
      <>
        <Spinner size={100} loading />
      </>
    );
  }

  setTimeout(() => {
    setIdUser(userData.id);
  }, 0);

  // if (!isRegistered) {
  //   return (
  //     <>
  //       <Spinner size={100} loading />
  //     </>
  //   );
  // }

  let isMentor;
  if (userData.id === detailPath[0].id_mentor) isMentor = true;
  else isMentor = false;

  const regisClass = async () => {
    try {
      const data = await orderService.registerClass(
        id,
        userData.id,
        detailPath[0].name_path,
        detailPath[0].total_participants,
        detailPath[0].img_url,
        detailPath[0].price,
        userData.balance
      );

      console.log(data);

      toast.success("register successful 🔓");
      location.reload();
    } catch (error) {
      console.log("getting error");
      console.log(error);
      toast.error(`${error.response.data}`);
    }
  };

  console.log(isRegistered);
  console.log(mentorData);

  return (
    <>
      <div className="gig">
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
              Fiverr / Programming & Tech / Website Development / Custom
              Websites
            </span>
            <h1>{detailPath[0].name_path}</h1>
            <div className="user">
              <img className="pp" src={profile} alt="" />
              <span>Vikas Parmar</span>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
            </div>
            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              <img
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Slider>
            <div className="gig-description">
              <p>
                Description : <br />
              </p>
              <p>{detailPath[0].description}</p>
              <ul>
                <li>Peserta : {detailPath[0].peserta}</li>
                <li>Peluang : {detailPath[0].peluang}</li>
                <li>Levels : {detailPath[0].levels}</li>
                <li>Benefit : {detailPath[0].benefit}</li>
              </ul>
            </div>
            <div className="seller">
              <h2>About The Mentor</h2>
              <div className="user">
                <img src={mentorData.img_profile} alt="" />
                <div className="info">
                  <span>{mentorData.name}</span>
                  <div className="stars">
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <span>5</span>
                  </div>
                  <Link to="https://vikas-parmar.github.io/" target="_blank">
                    <button>View Profile</button>
                  </Link>
                </div>
              </div>
              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">Email : </span>
                    <span className="desc">{mentorData.email}</span>
                  </div>
                  <div className="item">
                    <span className="title">Languages</span>
                    <span className="desc">Indonesia, English</span>
                  </div>
                </div>
                <hr />
                <p>{mentorData.description}</p>
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
          {!isMentor ? (
            <div className="right">
              <div className="price">
                <h3>💎 {detailPath[0].name_path} </h3>
                <h2>
                  <Coin /> {detailPath[0].price}
                </h2>
              </div>
              <p>{detailPath[0].description}</p>
              <div className="details">
                <div className="item">
                  <img src="/img/clock.png" alt="" />
                  <span>Akses Seumur Hidup</span>
                </div>
                <div className="item">
                  <img src="/img/recycle.png" alt="" />
                  <span>on-going</span>
                </div>
              </div>
              <div className="features">
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>{detailPath[0].peserta}</span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>{detailPath[0].peluang}</span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>{detailPath[0].levels}</span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>{detailPath[0].benefit}</span>
                </div>
              </div>
              {!isRegistered ? (
                <button onClick={() => regisClass()}>Daftar Kelas</button>
              ) : (
                <button>Masuk ke Kelas</button>
              )}
            </div>
          ) : (
            <div className="right">
              <div className="price">
                <h3>💎 {detailPath[0].name_path} ✨</h3>
                <h2>
                  <Coin /> {detailPath[0].price}
                </h2>
              </div>
              <p>{detailPath[0].description}</p>
              <div className="details">
                <div className="item">
                  <img src="/img/clock.png" alt="" />
                  <span>Akses Seumur Hidup</span>
                </div>
                <div className="item">
                  <img src="/img/recycle.png" alt="" />
                  <span>on-going</span>
                </div>
              </div>
              <div className="features">
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>{detailPath[0].peserta}</span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>{detailPath[0].peluang}</span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>{detailPath[0].levels}</span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>{detailPath[0].benefit}</span>
                </div>
              </div>
              <button>Lihat Pengaturan Kelas </button>
            </div>
          )}
        </div>
      </div>
      <div className="gigs">
        <div className="container">
          <h1>
            List Materi{" "}
            {isMentor && (
              <button>
                <Link to={`/addTopic/${id}`}>Add Topic</Link>
              </button>
            )}
          </h1>
          <p>Explore materi yang diberikan oleh mentor ini.</p>
          <div className="cards">
            {itemsPath.map((item) => (
              <SubCard
                key={item.id_topic}
                item={item}
                isRegistered={isRegistered}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Path;
