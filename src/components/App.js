import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RootView from "../pages/RootView";
import DetailView from "../pages/DetailView";
import FormView from "../pages/FormView";
import NotFoundView from "../pages/NotFoundView";
import "../styles/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/add" component={FormView} />
          <Route exact path="/details" component={DetailView} />
          <Route exact path="/" component={RootView} />
          <Route component={NotFoundView} />
        </Switch>
      </div>
    );
  }
}
