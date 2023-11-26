/* eslint-disable react/prop-types */
import WithAxios from "../helpers/withAxios";
import { createContext, useContext, useEffect, useState } from "react";
import orderService from "../services/order.service";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(null);
  const [idCurrPath, setidCurrPath] = useState(null);
  const [idUser, setIdUser] = useState(null);
  const [registeredClass, setRegisteredClass] = useState(null);
  const [taughtClass, setTaughtClass] = useState(null);

  useEffect(() => {
    try {
      orderService.isRegistered(idCurrPath, idUser).then(({ data }) => {
        console.log(data);
        if (data.length !== 0) setIsRegistered(true);
        else setIsRegistered(false);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [idCurrPath, idUser]);

  useEffect(() => {
    try {
      orderService.getUserPath(idUser).then(({ data }) => {
        console.log(data);
        setRegisteredClass(data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [idUser]);

  useEffect(() => {
    try {
      orderService.getMentorPath(idUser).then(({ data }) => {
        console.log(data);
        setTaughtClass(data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [idUser]);

  return (
    <OrderContext.Provider
      value={{
        registeredClass,
        setRegisteredClass,
        isRegistered,
        setIsRegistered,
        idCurrPath,
        setidCurrPath,
        idUser,
        setIdUser,
        taughtClass,
        setTaughtClass,
      }}
    >
      <WithAxios>{children}</WithAxios>
    </OrderContext.Provider>
  );
};

const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within OrderProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { OrderProvider, useOrder };
