import React, { Component } from "react";
import RootNavBar from "../components/navbar/RootNavBar";

export default class DetailView extends Component {
  render() {
    return (
      <div className="DetailView">
        <RootNavBar />
        Detail View Here
      </div>
    );
  }
}
