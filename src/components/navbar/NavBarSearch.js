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

export default class NavBarSearch extends Component {
  render() {
    return (
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Customer Search"
          max="100"
          aria-label="Search"
          required
        />
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">
          <FontAwesomeIcon icon={faSearch} className="search" /> Search
        </button>
      </form>
    );
  }
}
