import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../assets/movie.png";
import { useDispatch } from "react-redux";
import { selectMovie, selectTv } from "../stores/typeStore";

const NavBar = (props) => {
  const dispatch = useDispatch();

  const popularLink = `/${props.url}popular`;
  const searchLink = `/${props.url}search`;
  const topLink = `/${props.url}top_rated`;
  const dropdownText = props.text;

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <img alt="logo" width="32" height="32" src={logo} />
          </NavLink>
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
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {dropdownText}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => dispatch(selectMovie())}
                    >
                      Movies
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => dispatch(selectTv())}
                    >
                      TV Shows
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to={searchLink} className="search nav-link">
                  Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={popularLink} className="popular nav-link">
                  Popular
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={topLink} className="upcoming nav-link">
                  Top
                </NavLink>
              </li>
            </ul>
            <SearchBar typeObject={props.type} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
