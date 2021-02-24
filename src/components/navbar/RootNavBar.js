import React, { Component } from "react";
import NavBarSearch from "../navbar/NavBarSearch";
import NavBarLinks from "../navbar/NavBarLinks";

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
          <NavBarLinks />

          <NavBarSearch />
        </div>
      </nav>
    );
  }
}
