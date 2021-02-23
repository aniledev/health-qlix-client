import React, { Component } from "react";
import RootNavBar from "../components/navbar/RootNavBar";
import CustomerDetailTable from "../components/table/CustomerDetailTable";

export default class DetailView extends Component {
  render() {
    return (
      <div className="DetailView">
        <RootNavBar />

            <CustomerDetailTable/>
        
      </div>
    );
  }
}
