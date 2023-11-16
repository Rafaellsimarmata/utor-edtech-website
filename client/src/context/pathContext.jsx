/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
// import PathService from "../services/path.service";
import pathService from "../services/path.service";

const PathContext = createContext();

const PathProvider = ({ children }) => {
  const [Path, setPath] = useState(null);
  const [itemsPath, setItemsPath] = useState(null);
  const [detailPath, setDetailPath] = useState(null);
  const [pathId, setPathId] = useState(null);
  const [listMateri, setListMateri] = useState(null);
  const [idTopic, setIdTopic] = useState(null);

  useEffect(() => {
    pathService.getPathAll().then((response) => {
      setPath(response.data);
    });
  }, []);

  useEffect(() => {
    pathService.getPathById(pathId).then((response) => {
      setDetailPath(response.data);
    });
  }, [pathId]);

  useEffect(() => {
    pathService.getItemsPathById(pathId).then((response) => {
      setItemsPath(response.data);
    });
  }, [pathId]);

  useEffect(() => {
    pathService.getListMateri(idTopic).then((response) => {
      setListMateri(response.data);
    });
  }, [idTopic]);

  return (
    <PathContext.Provider
      value={{
        Path,
        setPath,
        detailPath,
        setDetailPath,
        pathId,
        setPathId,
        itemsPath,
        setItemsPath,
        listMateri,
        setListMateri,
        idTopic,
        setIdTopic,
      }}
    >
      {children}
    </PathContext.Provider>
  );
};

const usePath = () => {
  const context = useContext(PathContext);
  if (context === undefined) {
    throw new Error("usePath must be used within a PathProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { PathProvider, usePath };
