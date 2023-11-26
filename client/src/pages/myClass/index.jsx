import { Link } from "react-router-dom";
import "./MyGigs.scss";
import { useUser } from "../../context/userContext";
// import { usePath } from "../../context/pathContext";
import { useOrder } from "../../context/orderContext";
import { Spinner } from "../../components";
import { RegisClass } from "../../components";

const MyPaths = () => {
  const { userData } = useUser();
  const { registeredClass, setIdUser } = useOrder();

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

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Kelas Terdaftar" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/paths">
              <button>Tambah Kelas</button>
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
          {registeredClass.map((item) => (
            <RegisClass key={item.id_order} item={item}  action={"Class"}/>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyPaths;
