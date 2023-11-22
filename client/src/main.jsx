import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./style.scss";
import { UserProvider } from "./context/userContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PathProvider } from "./context/pathContext.jsx";
import { OrderProvider } from "./context/orderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <UserProvider>
        <PathProvider>
          <OrderProvider>
            <App />
          </OrderProvider>
        </PathProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
