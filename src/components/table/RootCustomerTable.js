import React, { Component } from "react";

import DropDownButton from "./DropDownButton";
import RootTableData from "./RootTableData";

export default class RootCustomerTable extends Component {
  render() {
    return (
      <main class="RootCustomerTable container mt-4 mb-5">
        <DropDownButton />

        <RootTableData />

        
      </main>
    );
  }
}
