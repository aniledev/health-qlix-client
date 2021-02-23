import React, { Component } from "react";

export default class FormInputs extends Component {
  render() {
    return (
      <form class="mt-5">
        <div class="form-group">
          <label for="input-name">
            <i class="fas fa-user"></i>Name
          </label>
          <input
            type="text"
            max="3"
            min="100"
            class="form-control"
            id="input-name"
            placeholder="Jane Doe"
            required
          />
        </div>
        <div class="form-group">
          <label for="input-address-1">
            <i class="fas fa-home"></i>AAddress Line 1
          </label>
          <input
            type="text"
            class="form-control"
            id="input-address-1"
            placeholder="1234 Main St"
            max="100"
            min="5"
            required
          />
        </div>
        <div class="form-group">
          <label for="input-address-2">
            <i class="fas fa-building"></i>Address Line 2
          </label>
          <input
            type="text"
            class="form-control"
            id="input-address-2"
            placeholder="Apartment, studio, or floor"
            max="30"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="input-city">
              <i class="fas fa-city"></i>City
            </label>
            <input
              type="text"
              class="form-control"
              id="input-city"
              placeholder="Anywhere"
              max="100"
              required
            />
          </div>
          <div class="form-group col-md-4">
            <label for="input-state">
              <i class="fas fa-flag-usa"></i>State
            </label>
            <select id="input-state" class="form-control" required>
              <option selected>Choose state</option>
              <option value="">N/A</option>
              <option value="AK">Alaska</option>
              <option value="AL">Alabama</option>
              <option value="AR">Arkansas</option>
              <option value="AZ">Arizona</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DC">District of Columbia</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="IA">Iowa</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="MA">Massachusetts</option>
              <option value="MD">Maryland</option>
              <option value="ME">Maine</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MO">Missouri</option>
              <option value="MS">Mississippi</option>
              <option value="MT">Montana</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="NE">Nebraska</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NV">Nevada</option>
              <option value="NY">New York</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VA">Virginia</option>
              <option value="VT">Vermont</option>
              <option value="WA">Washington</option>
              <option value="WI">Wisconsin</option>
              <option value="WV">West Virginia</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="input-zip">
              <i class="fas fa-map-pin"></i>Zip
            </label>
            <input
              type="text"
              class="form-control"
              id="input-zip"
              placeholder="12345"
              max="15"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label for="input-description">
            <i class="fas fa-clipboard"></i>Description
          </label>
          <textarea
            type="text"
            class="form-control"
            id="input-description"
            rows="3"
          ></textarea>
        </div>

        <div class="form-group">
          <label for="input-notes">
            <i class="fas fa-sticky-note"></i>Notes
          </label>
          <textarea
            type="text"
            class="form-control"
            id="input-notes"
            rows="3"
          ></textarea>
        </div>

        <div class="d-flex justify-content-end">
          <a href="root.html">
            <button type="button" class="btn btn-danger cancel mt-3 mx-2">
              <i class="fa fa-times-circle"></i>
              Cancel
            </button>
          </a>
          <button type="submit" class="btn btn-primary add-customer mt-3">
            <i class="fa fa-plus-square"></i>
            Add Customer
          </button>
        </div>
      </form>
    );
  }
}
