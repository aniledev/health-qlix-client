import React, { Component } from "react";
import { Link } from "react-router-dom";

import RootNavBar from "../components/navbar/RootNavBar";
import "../styles/NotFoundView.css";

export default class NotFoundView extends Component {
  render() {
    return (
      <div className="NotFoundView">
        <RootNavBar />
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="error-template">
                <h1>Oops!</h1>
                <h2>404 Not Found</h2>
                <div class="error-details">
                  Sorry, an error has occured. Requested page not found
                </div>
                <div class="error-actions">
                  <Link to="/" class="btn reroute btn-lg home">
                    Take Me Home{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
