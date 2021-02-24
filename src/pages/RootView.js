import React, { Component } from "react";
import RootNavBar from "../components/navbar/RootNavBar";
import RootCustomerTable from "../components/table/RootCustomerTable";

export default class RootView extends Component {
  render() {
    return (
      <div className="RootView">
        <RootNavBar />
        <RootCustomerTable />
      </div>
    );
  }
}
