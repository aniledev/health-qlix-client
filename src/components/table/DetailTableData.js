import React, { Component } from "react";

export default class DetailTableData extends Component {
  render() {
    return (
      <table class="table table-hover mt-4">
        <tbody>
          <tr>
            <th class="info-label" scope="row">
              <i class="fas fa-list-ol"></i>ID
            </th>
            <td>5515</td>
          </tr>
          <tr>
            <th class="info-label" scope="row">
              <i class="fas fa-home"></i>Address Line 1
            </th>
            <td>59528 West Harbor</td>
          </tr>
          <tr>
            <th class="info-label" scope="row">
              <i class="fas fa-building"></i>Address Line 2
            </th>
            <td></td>
          </tr>
          <tr>
            <th class="info-label" scope="row">
              <i class="fas fa-city"></i>City
            </th>
            <td>Alifurt</td>
          </tr>
          <tr>
            <th class="info-label" scope="row">
              <i class="fas fa-flag-usa"></i>State
            </th>
            <td>WV</td>
          </tr>
          <tr>
            <th class="info-label" scope="row">
              <i class="fas fa-map-pin"></i>Zip
            </th>
            <td>66792</td>
          </tr>
          <tr>
            <th class="info-label" scope="row">
              <i class="fas fa-clipboard"></i>Description
            </th>
            <td>
              Aliqua nulla dolore id excepteur reprehenderit dolor amet
              exercitation anim qui id. Laborum ipsum veniam cupidatat cupidatat
              occaecat nulla proident eu ipsum sunt. Quis consectetur id Lorem
              fugiat enim Lorem elit ipsum exercitation amet. Irure nulla
              consequat laborum sint. Ullamco sit esse commodo ea. Minim est
              aute in qui officia tempor consectetur excepteur aute officia
              fugiat sint sit. Consequat est ullamco et consectetur fugiat amet.
            </td>
          </tr>
          <tr>
            <th class="info-label" scope="row">
              <i class="fas fa-sticky-note"></i>Notes
            </th>
            <td>
              Elit mollit reprehenderit aliquip enim enim incididunt. Laborum
              eiusmod adipisicing elit incididunt dolore officia irure anim sit
              quis esse laboris officia. Voluptate reprehenderit enim nulla non.
              Reprehenderit deserunt laboris deserunt veniam laborum consectetur
              ut velit commodo adipisicing ipsum.
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
