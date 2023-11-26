import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { Coin, PlusSquareFill } from "react-bootstrap-icons";
import { Spinner } from "../../components";
import { toast } from "react-toastify";
import "./Navbar.scss";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { isLoggedIn, userData, logout } = useUser();
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  let currentUser;
  if (isLoggedIn) {
    currentUser = {
      ...userData,
    };
  } else {
    currentUser = null;
  }

  if (!userData) {
    return (
      <>
        <Spinner size={100} loading />
      </>
    );
  }

  const logoutButton = async () => {
    // console.log("clicked");
    // e.preventDefault();
    try {
      toast.warning("Logout successfully");
      // localStorage.removeItem("token");
      logout();
      location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link style={{ textDecoration: "none" }} className="link" to="/">
            <img src="./logo.png" alt="" />
            <span className="text"> Utor</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <span>About Us </span>
          <span>Explore</span>
          <span>Komunitas</span>
          {currentUser ? (
            <>
              <div className="saldo">
                <p>
                  Saldo : <Coin />
                  {userData.balance}
                </p>
                <PlusSquareFill />
              </div>
              <div className="user" onClick={() => setOpen(!open)}>
                <img
                  src="https://raw.githubusercontent.com/vikas-parmar/vikas-parmar.github.io/main/assets/portrait-1.png"
                  alt=""
                />
                <span>{currentUser?.name}</span>
                {open && (
                  <div className="options">
                    <>
                      <Link className="link" to="/profile">
                        Profile
                      </Link>
                      <Link className="link" to="/myclass">
                        Kelas Terdaftar
                      </Link>
                      <Link className="link" to="/paths">
                        tambah Kelas
                      </Link>
                      <Link className="link" to="/mypaths">
                        Path saya
                      </Link>
                      <Link className="link" to="/addpath">
                        tambah path
                      </Link>
                      <Link className="link" to="/orders">
                        Orders
                      </Link>
                      <Link className="link" to="/messages">
                        Messages
                      </Link>
                      <Link
                        className="link"
                        to="/"
                        onClick={() => logoutButton()}
                      >
                        Logout
                      </Link>
                    </>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link className="link" to="/login">
                <span>Log in</span>
              </Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
