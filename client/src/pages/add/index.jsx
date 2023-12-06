import "./Add.scss";
import { useUser } from "../../context/userContext";
import { Spinner } from "../../components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import pathService from "../../services/path.service";

const Add = () => {
  const { userData } = useUser();
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { state } = useLocation();
  const [data, setData] = useState({
    namePath: "",
    desc: "",
    peserta: "",
    peluang: "",
    level: "beginner",
    benefit: "",
    category: "design",
    imgUrl: "",
    idMentor: "",
    price: 0,
  });

  if (!userData) {
    return (
      <>
        <Spinner size={100} loading />
      </>
    );
  }

  // if (userData.roles !== "mentor") {
  //   return <Navigate to={state?.from || "/"} />;
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // console.log(data);
      // return;
      const pathData = await pathService.createPath(data);
      console.log(pathData);
      toast.success("Path created successfully");

      setTimeout(() => {
        setRedirectToReferrer(true);
      }, 1500);
    } catch (error) {
      console.log(error.response?.data.message);
    }
  };

  // const onSubmit = async (getValues) => {
  //   console.log(getValues);
  //   return;
  //   try {
  //     const data = await pathService.createPath(getValues);
  //     console.log(data);
  //     // toast.success("Login successful 🔓");

  //     setTimeout(() => {
  //       setRedirectToReferrer(true);
  //     }, 1500);
  //   } catch (error) {
  //     console.log(error.response?.data.message);
  //   }
  // };

  if (redirectToReferrer) {
    console.log("redirect page");
    return <Navigate to={state?.from || "/"} />;
  }

  return (
    <div className="add">
      <div className="container">
        <h1>Add New Path</h1>
        <form onSubmit={handleSubmit} method="post">
          <div className="sections">
            <div className="info">
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="namePath"
                id="namePath"
                placeholder="e.g. I will do something I'm really good at"
                onChange={(event) =>
                  setData({
                    ...data,
                    namePath: event.target.value,
                    idMentor: userData.id,
                  })
                }
              />
              <label htmlFor="">Category</label>
              <select
                name="category"
                defaultValue={"design"}
                id="category"
                onChange={(event) =>
                  setData({
                    ...data,
                    category: event.target.value,
                  })
                }
              >
                <option value="design">Design</option>
                <option value="web">Programming</option>
                <option value="Business">Business</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Data">Data</option>
                <option value="Photography">Photography</option>
                <option value="Education">Education</option>
                <option value="Marketing">Marketing</option>
                <option value="Writing">Writing</option>
                <option value="animation">Animation</option>
                <option value="music">Music</option>
              </select>
              <label htmlFor="">Cover Image</label>
              <input
                type="url"
                name="imgUrl"
                onChange={(event) =>
                  setData({
                    ...data,
                    imgUrl: event.target.value,
                  })
                }
              />
              {/* <label htmlFor="">Upload Images</label>
              <input type="file" multiple /> */}
              <label htmlFor="">Description</label>
              <textarea
                name="desc"
                id="desc"
                placeholder="Brief descriptions to introduce your service to customers"
                cols="0"
                rows="16"
                onChange={(event) =>
                  setData({
                    ...data,
                    desc: event.target.value,
                  })
                }
              ></textarea>
              <button type="submit">Create</button>
            </div>
            <div className="details">
              <label htmlFor="">Peserta</label>
              <input
                type="text"
                name="peserta"
                placeholder="e.g. One-page web design"
                onChange={(event) =>
                  setData({
                    ...data,
                    peserta: event.target.value,
                  })
                }
              />
              <label htmlFor="">Peluang</label>
              <input
                type="text"
                name="peluang"
                placeholder="e.g. wordpress developer, software engineer"
                onChange={(event) =>
                  setData({
                    ...data,
                    peluang: event.target.value,
                  })
                }
              />
              <label htmlFor="">level</label>
              <select
                name="level"
                id="level"
                defaultValue={"Beginner"}
                onChange={(event) =>
                  setData({
                    ...data,
                    level: event.target.value,
                  })
                }
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
              <label htmlFor="">Benefit </label>
              <input
                type="text"
                name="benefit"
                placeholder="e.g. page design"
                onChange={(event) =>
                  setData({
                    ...data,
                    benefit: event.target.value,
                  })
                }
              />
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                onChange={(event) =>
                  setData({
                    ...data,
                    price: event.target.value,
                  })
                }
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
