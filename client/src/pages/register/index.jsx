// import NavbarComponent from "../../components/Navbar";
// import FooterComponent from "../../components/footer";
// import { useState } from "react";
import "./login-style.css";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const RegisterPage = ({ setAuth }) => {
  // const [inputs, setInputs] = useState({
  //   email: "",
  //   name: "",
  //   password: "",
  // });

  // const googleAuth = async () => {
  //   window.open(`http://localhost:3009/google/callback`, "_self");
  // };

  // const { email, name, password } = inputs;

  // const onChange = (e) =>
  //   setInputs({ ...inputs, [e.target.name]: e.target.value });

  // const onSubmitForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const body = { email, name, password };
  //     const response = await fetch("http://localhost:3009/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });

  //     const parseRes = await response.json();

  //     if (parseRes.status !== 401) {
  //       toast.success("Registered Successfully");
  //       localStorage.setItem("token", parseRes);
  //       console.log("stored");
  //       setAuth(true);
  //     } else {
  //       let signMessage = document.getElementById("message");
  //       signMessage.innerHTML = parseRes.message;
  //       signMessage.style.color = "red";
  //       setAuth(false);
  //     }
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  return (
    <>
      <div className="login-container">
        <h1>Register</h1>
        <p id="message"></p>
        <br />
        <form method="post">
          <label htmlFor="name">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Your name.."
            onChange={(e) => onChange(e)}
          />

          <label htmlFor="email">Email / Username</label>
          <input
            type="text"
            id="email"
            name="email"
            // value={email}
            placeholder="Your email.."
            onChange={(e) => onChange(e)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            // value={password}
            placeholder="Your password.."
            onChange={(e) => onChange(e)}
          />

          <button type="submit">Register</button>
          <br />

          <p>or</p>
          <br />
          <br />

          <br />
        </form>
        <button type="google">
          Register with Google
        </button>
      </div>
    </>
  );
};

export default RegisterPage;
