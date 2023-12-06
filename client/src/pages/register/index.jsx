import {
  useGoogleLogin,
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleOneTapLogin,
} from "@react-oauth/google";
// import { Button, HelperText, Input, Label } from "@windmill/react-ui";
// import ForgotPasswordModal from "../../components/ForgotPasswordModal";
import { useUser } from "../../context/userContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, Navigate, useLocation } from "react-router-dom";
// import PulseLoader from "react-spinners/PulseLoader";
import authService from "../../services/auth.service";
import "./login-style.css";

const LoginPage = () => {
  const { isLoggedIn, setUserState } = useUser();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { state } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => handleGoogleLogin(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
    flow: "auth-code",
  });

  async function handleGoogleLogin(googleData) {
    try {
      console.log(googleData);
      const data = await authService.googleLogin(googleData.code);
      toast.success("Login successful 🔓");
      setUserState(data);
      setRedirectToReferrer(true);
    } catch (error) {
      console.log("getting error");
      console.log(error);
      toast.error("Could not login with Google 😢");
    }
  }

  const onSubmit = async (data) => {
    const { name, email, password } = data;

    try {
      setError("");
      setIsLoading(true);
      const data = await authService.register(name, email, password);
      console.log(data);
      toast.success("Register successful 🔓");

      setTimeout(() => {
        setUserState(data);
        setRedirectToReferrer(true);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      toast.error(`${error.response?.data.message}`);
      setError(error.response?.data.message);
    }
  };

  if (redirectToReferrer) {
    console.log("redirect page");
    return <Navigate to={state?.from || "/"} />;
  }
  if (isLoggedIn) {
    return <Navigate to={state?.from || "/"} />;
  }

  return (
    <div className="login-container">
      <h1>Register</h1>
      <p id="message"></p>
      <br />
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          {...register("name", {
            required: true,
          })}
          placeholder="Enter a valid Name"
        />

        <label htmlFor="email">Email / Username</label>
        <input
          type="text"
          id="email"
          name="email"
          {...register("email", {
            required: true,
            // eslint-disable-next-line no-useless-escape
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          placeholder="Enter a valid email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Your password.."
          {...register("password", { required: true })}
        />

        <button type="submit">Register</button>
        <br />

        <p>or</p>
        <br />
        <br />

        <button
          type="google"
          onClick={() => {
            login();
          }}
        >
          Sign in with Google
        </button>
        <br />
        <p>
          Sudah punya akun ? <Link to="/login">Login</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
