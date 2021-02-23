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
import NavBarSearch from "../navbar/NavBarSearch";

export default class RootNavBar extends Component {
  render() {
    return (
      <nav class="RootNavBar mb-4 navbar navbar-expand-lg navbar-dark sticky-top">
        <a class="navbar-brand" href="/">
          <img
            src="/health-qliz-logo.png"
            width="25"
            height="25"
            class="align-items-center justify-content-center logo"
            alt=""
          />
          Health Qlix Rolodex
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/form.html">
                <FontAwesomeIcon icon={faPlusSquare} className="plus" /> Create
                New
              </a>
            </li>
          </ul>

          <NavBarSearch />
          
        </div>
      </nav>
    );
  }
}
