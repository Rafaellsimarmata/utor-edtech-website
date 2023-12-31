import { Link } from "react-router-dom";
import "./MyGigs.scss";
import { useUser } from "../../context/userContext";
// import { usePath } from "../../context/pathContext";
import { useOrder } from "../../context/orderContext";
import { Spinner } from "../../components";
import { RegisClass } from "../../components";

const MyPaths = () => {
  const { userData } = useUser();
  const { taughtClass, setIdUser } = useOrder();

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  if (!userData) {
    return (
      <>
        <Spinner size={100} loading />
      </>
    );
  }

  setTimeout(() => {
    setIdUser(userData.id);
  }, 0);

  console.log(userData.id);
  console.log(taughtClass);

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Daftar Kelas Ajaran" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/addpath">
              <button>Tambah Path</button>
            </Link>
          )}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Peserta</th>
            <th>Action</th>
          </tr>
          {taughtClass.map((item) => (
            <RegisClass key={item.id_path} item={item} action={"path"} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyPaths;
