import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/*<form className="d-flex mx-2" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
  </form>*/}

          <div className="d-flex ms-3">
            <button
              className="btn btn-primary mx-1"
              onClick={() => changeBackgroundColor("blue")}
            >
              Blue
            </button>
            <button
              className="btn btn-danger mx-1"
              onClick={() => changeBackgroundColor("red")}
            >
              Red
            </button>
            <button
              className="btn btn-success mx-1"
              onClick={() => changeBackgroundColor("green")}
            >
              Green
            </button>
            <button
              className="btn btn-warning mx-1"
              onClick={() => changeBackgroundColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="btn btn-secondary mx-1"
              onClick={() => changeBackgroundColor("purple")}
            >
              Purple
            </button>
            <button
              className="btn btn-orange mx-1"
              onClick={() => changeBackgroundColor("orange")}
            >
              Orange
            </button>
            <button
              className="btn btn-pink mx-1"
              onClick={() => changeBackgroundColor("pink")}
            >
              Pink
            </button>
            <button
              className="btn btn-teal mx-1"
              onClick={() => changeBackgroundColor("teal")}
            >
              Teal
            </button>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } `}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
//agar mein manually props ko na pass kru toh
//Navbar.defaultProps = {
//  title: 'Textutils',
//   aboutText: 'About Textutils'
//  };
