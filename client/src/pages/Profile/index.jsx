import "./styleP.css";
import { useUser } from "../../context/userContext";
import { Spinner } from "../../components";
import { Instagram, Facebook, Linkedin, Youtube } from "react-bootstrap-icons";

export default function ProfilePage() {
  const { userData, logout } = useUser();

  if (!userData) {
    return (
      <>
        <Spinner size={100} loading />
      </>
    );
  }

  console.log(userData);

  return (
    <main className=" bg-black text-9xl">
      <section className="container-top">
        <img
          className="img-profile"
          src="https://th.bing.com/th?id=OIP.u2UEX9aRsW4Hv4_1k5e23QHaDT&w=349&h=156&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2"
        />
        <h3>{userData.name}</h3>
        <p>{userData.description}</p>
        <div className="sosmed-container">
          <Instagram />
          <Facebook />
          <Linkedin />
          <Youtube />
        </div>
        <div className="button container">
          <button>button</button>
          <button>Logout</button>
        </div>
      </section>
      <section className="container-bot">
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
      </section>
    </main>
  );
}
