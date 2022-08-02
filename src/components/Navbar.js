import React from "react"
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const {token} = props
    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Routines</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">Activities</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">My Routines</a>
          </li>
          </ul>
          <div className = "d-flex">
        {
          token ? (
            <div className = "p-2"><span className="nav-item">
          <NavLink className="nav-link" to="/">Logout</NavLink>
        </span>
        </div>
          ):(<div><div className = "p-2"><span className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </span>
        </div>
          <div className = "p-2"><span className="nav-item">
          <NavLink className="nav-link" to="/register">SignUp</NavLink>
        </span>
        </div></div>)
        }
        </div>
{/* Fixed login and signup and we have to work on the signout button */}
      
    </div>
  </div>
</nav>
    )
}
export default Navbar
