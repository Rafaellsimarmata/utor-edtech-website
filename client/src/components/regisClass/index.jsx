/* eslint-disable react/prop-types */

const regisClass = ({ item }) => {
  return (
    <>
      <tr>
        <td>
          <img className="image" src={item.img_url} alt="" />
        </td>
        <td>{item.name_path}</td>
        <td>{item.price}</td>
        <td>{item.total_participants}</td>
        <td>
          <img className="delete" src="./img/delete.png" alt="" />
        </td>
      </tr>
    </>
  );
};

export default regisClass;
