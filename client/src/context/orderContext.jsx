/* eslint-disable react/prop-types */
import WithAxios from "../helpers/withAxios";
import { createContext, useContext, useEffect, useState } from "react";
import orderService from "../services/order.service";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(null);
  const [idCurrPath, setidCurrPath] = useState(null);
  const [idStudent, setIdStudent] = useState(null);
  const [registeredClass, setRegisteredClass] = useState(null);

  useEffect(() => {
    try {
      orderService.isRegistered(idCurrPath, idStudent).then(({ data }) => {
        console.log(data);
        if (data.length !== 0) setIsRegistered(true);
        else setIsRegistered(false);
      });

      orderService.getUserPath(idStudent).then(({ data }) => {
        console.log(data);
        setRegisteredClass(data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [idCurrPath, idStudent]);

  // useEffect(() => {
  //   orderService.getUserPath(idStudent).then((response) => {
  //     console.log(response);
  //     setRegisteredClass(response.data);
  //   });
  // }, [idStudent]);

  return (
    <OrderContext.Provider
      value={{
        registeredClass,
        setRegisteredClass,
        isRegistered,
        setIsRegistered,
        idCurrPath,
        setidCurrPath,
        idStudent,
        setIdStudent,
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
