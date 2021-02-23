import React, { Component } from "react";
import RootNavBar from "../components/navbar/RootNavBar";

import NewCustomerForm from "../components/form/NewCustomerForm";
import "../styles/FormView.css";

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
