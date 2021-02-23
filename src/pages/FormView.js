import React, { Component } from "react";
import RootNavBar from "../components/navbar/RootNavBar";
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
import NewCustomerForm from "../components/form/NewCustomerForm";

export default class FormView extends Component {
  render() {
    return (
      <div className="FormView">
        <RootNavBar />
        <NewCustomerForm />
        
      </div>
    );
  }
}
