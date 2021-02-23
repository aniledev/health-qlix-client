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
import RootNavBar from "../components/navbar/RootNavBar";
import RootCustomerTable from "../components/table/RootCustomerTable";

export default class RootView extends Component {
  render() {
    return (
      <div className="RootView">
        <RootNavBar/>

       

        <RootCustomerTable></RootCustomerTable>
        
      </div>
    );
  }
}
