import "./AddTopic.scss";
import { useUser } from "../../context/userContext";
import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import VideoCard from "../../components/VideoCard";
import pathService from "../../services/path.service";
import { usePath } from "../../context/pathContext";
import { Spinner, MateriCard, ActiveMateriCard } from "../../components";

const AddTopic = () => {
  const { id } = useParams();
  const { userData } = useUser();
  const { detailPath, setPathId, itemsPath, listMateri, idTopic, setIdTopic } =
    usePath();
  // const [idTopic, setIdTopic] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);

  setTimeout(() => {
    setPathId(id);
  }, 0);

  // useEffect(() => {
  //   setPathId(id);
  // }, []);

  const { state } = useLocation();
  const [dataTopic, setDataTopic] = useState({
    judul: "",
    ispremium: false,
    descTopic: "",
    imgUrl: "",
    idPath: id,
  });

  const [dataMateri, setDataMateri] = useState({
    judulMateri: "",
    desc: "",
    urlVid: "",
    idTopic,
  });

  if (!userData || !detailPath || !detailPath[0]) {
    return (
      <>
        <Spinner size={100} loading />
      </>
    );
  }

  if (userData.roles !== "mentor" || userData.id !== detailPath[0].id_mentor) {
    return <Navigate to={state?.from || "/"} />;
  }

  const handleSubmitTopic = async (event) => {
    event.preventDefault();

    try {
      const pathData = await pathService.createTopicPath(dataTopic, id);
      setIdTopic(pathData.data.id_topic);
      toast.success("Topic created successfully");
      // location.reload();
    } catch (error) {
      console.log(error.response?.data.message);
    }
  };

  const handleSubmitMateri = async (event) => {
    event.preventDefault();

    try {
      const pathData = await pathService.createMateriTopic(dataMateri, idTopic);
      console.log(pathData);
      toast.success("Materi Added successfully");
    } catch (error) {
      console.log(error.response?.data.message);
    }
  };

  console.log(itemsPath);
  console.log(activeTopic);
  console.log(idTopic);

  const buttonFunc = () => {
    console.log("clocl");
  };

  return (
    <>
      <div className="add">
        <div className="container">
          <div className="headerr">
            <h1>Add New Topic in {detailPath[0].name_path}</h1>
            <button
              onClick={() => {
                setIdTopic(null);
              }}
            >
              {" "}
              Add Topic
            </button>
          </div>

          <div className="sections">
            {idTopic ? (
              <>
                <ActiveMateriCard
                  key={idTopic}
                  item={activeTopic}
                  setIdTopic={() => setIdTopic(idTopic)}
                  setActiveTopic={() => setActiveTopic(activeTopic)}
                />
                <div className="list-materi">
                  {listMateri.map((materi) => (
                    <VideoCard
                      key={materi.id_materi}
                      item={materi}
                      buttonFunc={buttonFunc}
                    />
                  ))}
                </div>
              </>
            ) : (
              <form onSubmit={handleSubmitTopic} method="post">
                <div className="info">
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    name="judul"
                    id="judul"
                    placeholder="e.g. I will do something I'm really good at"
                    onChange={(event) =>
                      setDataTopic({
                        ...dataTopic,
                        judul: event.target.value,
                      })
                    }
                  />
                  <label htmlFor="">Cover Image</label>
                  <input
                    type="url"
                    name="imgUrl"
                    onChange={(event) =>
                      setDataTopic({
                        ...dataTopic,
                        imgUrl: event.target.value,
                      })
                    }
                  />
                  <label htmlFor="">Topic Type</label>
                  <select
                    name="ispremium"
                    id="ispremium"
                    defaultValue={"false"}
                    onChange={(event) =>
                      setDataTopic({
                        ...dataTopic,
                        ispremium: event.target.value,
                      })
                    }
                  >
                    <option value={true}>premium</option>
                    <option value={false}>free</option>
                  </select>
                  <label htmlFor="">Description</label>
                  <textarea
                    name="descTopic"
                    id="descTopic"
                    placeholder="Brief descriptions to introduce your service to customers"
                    cols="0"
                    rows="16"
                    onChange={(event) =>
                      setDataTopic({
                        ...dataTopic,
                        descTopic: event.target.value,
                      })
                    }
                  ></textarea>
                  <button type="submit">Create</button>
                </div>
              </form>
            )}

            <form onSubmit={handleSubmitMateri} method="post">
              <div className="details">
                <label htmlFor="">Judul Materi</label>
                <input
                  type="text"
                  name="judulMateri"
                  placeholder="e.g. One-page web design"
                  onChange={(event) =>
                    setDataMateri({
                      ...dataMateri,
                      judulMateri: event.target.value,
                    })
                  }
                />
                <label htmlFor="">Deskripsi</label>
                <textarea
                  name="desc"
                  id="desc"
                  placeholder="Brief descriptions to introduce your service to customers"
                  cols="0"
                  rows="10"
                  onChange={(event) =>
                    setDataMateri({
                      ...dataMateri,
                      desc: event.target.value,
                    })
                  }
                ></textarea>
                <label htmlFor="">Url Video</label>
                <input
                  type="url"
                  name="urlVid"
                  onChange={(event) =>
                    setDataMateri({
                      ...dataMateri,
                      urlVid: event.target.value,
                    })
                  }
                />
                {idTopic ? (
                  <button type="submit">Create</button>
                ) : (
                  <p>Topic didnt get</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="gigs">
        <div className="container">
          <h1>List Materi </h1>
          <p>Pratinjau Materi yang telah tersimpan.</p>
          <div id="addTopicPath"></div>
          <div className="cards">
            {itemsPath.map((item) => (
              <MateriCard
                key={item.id_topic}
                item={item}
                setIdTopic={() => setIdTopic(item.id_topic)}
                setActiveTopic={() => setActiveTopic(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTopic;
