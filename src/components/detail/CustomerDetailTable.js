import React, { Component } from "react";
import DetailTableHeading from "../detail/DetailTableHeading";
import DetailTableData from "../detail/DetailTableData";

export default class CustomerDetailTable extends Component {
  render() {
    return (
      <main class="container mt-5 mb-5">
        <section>
          <DetailTableHeading />
          <DetailTableData />
          
        </section>
      </main>
    );
  }
}
