import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-light bg-success">
      <div className="container-fluid justify-content-center">
        <NavLink to="/" className="mx-1 p-1 text-dark fw-bold ">
          Weather
        </NavLink>
        <NavLink to="/about" className="mx-1 p-1 text-dark fw-bold ">
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
