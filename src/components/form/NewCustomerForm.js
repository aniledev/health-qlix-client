import React, { Component } from "react";
import FormHeading from "./FormHeading"
import FormInputs from "./FormInputs"

export default class NewCustomerForm extends Component {
  render() {
    return (
        <main class="container mt-5 mb-5">
            <FormHeading/>
        
            <FormInputs/>
       
      </main>
    );
  }
}
