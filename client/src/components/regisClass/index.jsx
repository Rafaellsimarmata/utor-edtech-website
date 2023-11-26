/* eslint-disable react/prop-types */
import { Eye } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const RegisClass = ({ item, action }) => {
  console.log(item);
  //   console.log("asdasdasd");
  return (
    <>
      <tr>
        <td>
          <img className="image" src={item.img_url} alt="" />
        </td>
        <td>{item.name_path}</td>
        <td>{item.price}</td>
        <td>{item.total_participants}</td>
        {action === "path" ? (
          <td>
            <img className="delete" src="./img/delete.png" alt="" />
          </td>
        ) : (
          <Link to={`/path/${item.id_path}`}>
            <td style={{ fontSize: "25px", color: "blue" }}>
              <Eye />
            </td>
          </Link>
        )}
      </tr>
    </>
  );
};

export default RegisClass;
