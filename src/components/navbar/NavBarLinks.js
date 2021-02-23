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

export default class NavBarLinks extends Component {
  render() {
    return (
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/form.html">
            <FontAwesomeIcon icon={faPlusSquare} className="plus" /> Create New
          </a>
        </li>
      </ul>
    );
  }
}
