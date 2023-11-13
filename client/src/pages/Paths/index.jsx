import { useRef, useState } from "react";
import { PathCard, Spinner } from "../../components";
import { usePath } from "../../context/pathContext";
import "./Gigs.scss";

const Paths = () => {
  const { Path } = usePath();
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  if (!Path) {
    return (
      <>
        <Spinner size={100} loading />
      </>
    );
  }

  // console.log(Path);

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Utor / Graphics & Design /</span>
        <h1>List Path</h1>
        <p>
          Explore the boundaries of art and technology with {"Fiverr's"} AI
          artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {Path.map((pathData) => (
            <PathCard
              key={pathData.id_path}
              item={pathData}
              id_path={pathData.id_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paths;
