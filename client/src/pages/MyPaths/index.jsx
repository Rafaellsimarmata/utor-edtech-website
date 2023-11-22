import { Link } from "react-router-dom";
import "./MyGigs.scss";
import { useUser } from "../../context/userContext";
// import { usePath } from "../../context/pathContext";
import { useOrder } from "../../context/orderContext";
import { Spinner } from "../../components";
import { RegisClass } from "../../components";
import pathService from "../../services/path.service";

const MyPaths = () => {
  const { userData } = useUser();
  const { registeredClass, setIdStudent } = useOrder();
  // const { detailPath, setPathId } = usePath();
  const dataClass = [];

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
    setIdStudent(userData.id);
  }, 0);

  // registeredClass.map(async (item, i) => {
  //   const { data } = await pathService.getPathById(item.id_path);

  //   console.log(data[0]);
  // });

  // console.log(dataClass);

  // dataClass.forEach((item) => {
  //   console.log("as");
  //   console.log(item);
  // });

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Kelas Terdaftar" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button>Tambah Kelas</button>
            </Link>
          )}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          {/* {registeredClass.map(async (item, i) => {
            const { data } = await pathService.getPathById(item.id_path);
            console.log(data[0]);

            return (
              <>
                <RegisClass key={item.id_order} item={data[0]} />
              </>
            );
          })} */}
        </table>
      </div>
    </div>
  );
};

export default MyPaths;
