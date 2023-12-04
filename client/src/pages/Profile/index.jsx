import "./styleP.css";
import { useUser } from "../../context/userContext";
import { Spinner } from "../../components";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProfilePage() {
  const { userData, logout } = useUser();

  if (!userData) {
    return (
      <>
        <Spinner size={100} loading />
      </>
    );
  }

  const logoutButton = async () => {
    try {
      toast.warning("Logout successfully");
      // localStorage.removeItem("token");
      logout();
      location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  console.log(userData);

  return (
    <main className=" bg-black text-9xl">
      <section className="container-top">
        <img className="img-profile" src={userData.img_profile} />
        <h3>{userData.name}</h3>
        <h6>ID : {userData.id}</h6>
        <br />
        <p>{userData.description}</p>
        <div className="sosmed-container">
          <Instagram />
          <Facebook />
          <Linkedin />
          <Youtube />
        </div>
        <div className="button container">
          <Link className="edit-profile" to="/" onClick={() => logoutButton()}>
            Edit
          </Link>
          <Link className="logout" to="/" onClick={() => logoutButton()}>
            Logout
          </Link>
        </div>
      </section>
      {/* <section className="container-bot">
        <h2>My Path</h2>
        <div className="card-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="card-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section> */}
    </main>
  );
}
