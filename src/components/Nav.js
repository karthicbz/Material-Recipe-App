import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to={"/"} className="no-underline">
        <h1>Home</h1>
      </Link>
      <ul className="nav-items">
        <Link to={"/credits"} className="no-underline">
          Credits
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
