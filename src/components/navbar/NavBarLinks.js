import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faSearch,
  faSortAlphaDown,
  faListOl,
  faUser,
  faHome,
  faBuilding,
  faCity,
  faFlagUsa,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default class NavBarLinks extends Component {
  render() {
    return (
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <NavLink class="nav-link" to="/">
            Home
          </NavLink>
        </li>

        <li class="nav-item">
          <NavLink class="nav-link" to="/add">
            {" "}
            <FontAwesomeIcon icon={faPlusSquare} className="plus" /> Create New
          </NavLink>
        </li>
      </ul>
    );
  }
}
