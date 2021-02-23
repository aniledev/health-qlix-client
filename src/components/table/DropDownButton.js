import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
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

export default class DropDownButton extends Component {
  render() {
    return (
      <div class="DropDownButton dropdown pt-43 mb-3 d-flex justify-content-end">
        <DropdownButton id="dropdown-basic-button" title="Sort">
          <Dropdown.Item className="dropdown-button" href="#/action-1">
            Name
            <FontAwesomeIcon
              icon={faSortAlphaDown}
              className="sort-alpha"
            />{" "}
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-button" href="#/action-2">
            State{" "}
            <FontAwesomeIcon icon={faSortAlphaDown} className="sort-alpha" />{" "}
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}
