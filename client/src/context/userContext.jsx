/* eslint-disable react/prop-types */
import API from "../api/axios-config";
import WithAxios from "../helpers/withAxios";
import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/auth.service";

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [userData, setUserData] = useState(null);
  const [authData, setAuthData] = useState({
    token: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      authService.getCurrentUser().then((res) => setUserData(res?.data));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
      setAuthData(JSON.parse(localStorage.getItem("token")));
    }
  }, []);

  const updateUserData = async ({
    name,
    email,
  }) => {
    const res = await API.put(`/users/${userData.user_id}`, {
      name,
      email
    });
    setUserData(res.data);
  };

  const setUserInfo = (data) => {
    const { user, token } = data;
    setIsLoggedIn(true);
    setUserData(user);
    setAuthData({
      token,
    });
    localStorage.setItem("token", JSON.stringify(token));
  };

  const logout = () => {
    setUserData(null);
    setAuthData(null);
    setIsLoggedIn(false);
    authService.logout();
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        setUserState: (data) => setUserInfo(data),
        logout,
        isLoggedIn,
        setIsLoggedIn,
        authData,
        setAuthData,
        updateUserData,
      }}
    >
      <WithAxios>{children}</WithAxios>
    </UserContext.Provider>
  );
};

  const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error("useUser must be used within UserProvider");
    }
    return context;
  };

// eslint-disable-next-line react-refresh/only-export-components
export { UserProvider, useUser };
