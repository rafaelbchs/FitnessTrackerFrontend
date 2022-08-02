import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const { token, setToken } = props;
  let navigate = useNavigate();
  const currentToken = localStorage.getItem("token");
  function handleLogout(event) {
    event.preventDefault();
    setToken("");
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Fitness Tracker
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/routines">
                  Routines
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/activities">
                  Activities
                </NavLink>
              </li>
              {currentToken ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/myroutines">
                    My Routines
                  </NavLink>
                </li>
              ) : null}
            </ul>
            <div className="d-flex">
              {currentToken ? (
                <div className="p-2">
                  <span className="nav-item">
                    <NavLink className="nav-link" to="/" onClick={handleLogout}>
                      Logout
                    </NavLink>
                  </span>
                </div>
              ) : (
                <>
                  <div className="p-2">
                    <span className="nav-item">
                      <NavLink className="nav-link" to="/login">
                        Login
                      </NavLink>
                    </span>
                  </div>
                  <div className="p-2">
                    <span className="nav-item">
                      <NavLink className="nav-link" to="/register">
                        SignUp
                      </NavLink>
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
