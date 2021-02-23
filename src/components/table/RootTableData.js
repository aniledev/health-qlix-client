import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faSearch,
  faSortAlphaDown,
  faListOl,
  faUser,
  faHome,
  faBuilding,
  faCity,
  faFlagUsa,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { DropdownButton, Dropdown } from "react-bootstrap";
import RootTableRow from "./RootTableRow";

export default class RootTableData extends Component {
  render() {
    return (
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">
              <FontAwesomeIcon icon={faListOl} className="list" />
              ID
            </th>
            <th scope="col">
              <FontAwesomeIcon icon={faUser} className="user" />
              Name
            </th>
            <th scope="col">
              <FontAwesomeIcon icon={faHome} className="home" />
              Address Line 1
            </th>
            <th scope="col">
              <FontAwesomeIcon icon={faBuilding} className="building" />
              Address Line 2
            </th>
            <th scope="col">
              <FontAwesomeIcon icon={faCity} className="city" />
              City
            </th>
            <th scope="col">
              <FontAwesomeIcon icon={faFlagUsa} className="flag" />
              State
            </th>
            <th scope="col">
              <FontAwesomeIcon icon={faMapPin} className="pin" />
              Zip
            </th>
          </tr>
        </thead>
        <tbody>
          <RootTableRow />
          <tr>
            <th scope="row">5515</th>
            <td>Jackie Bruen</td>
            <td>59528 West Harbor</td>
            <td></td>
            <td>Alifurt</td>
            <td>WV</td>
            <td>66792</td>
          </tr>
          <tr>
            <th scope="row">16200</th>
            <td>Jesus O'Conner</td>
            <td>77601 Gayle Greens</td>
            <td></td>
            <td>North Hilbert</td>
            <td>CT</td>
            <td>40514-4024</td>
          </tr>
          <tr>
            <th scope="row">24958</th>
            <td>Darla Lemke</td>
            <td>089 Jayde Street</td>
            <td>Suite 268</td>
            <td>Waltonbury</td>
            <td>KS</td>
            <td>69658</td>
          </tr>
          <tr>
            <th scope="row">27753</th>
            <td>Heidi Auer</td>
            <td>216 Daren Gateway</td>
            <td></td>
            <td>Lake Dock</td>
            <td>NV</td>
            <td>26651</td>
          </tr>
          <tr>
            <th scope="row">67658</th>
            <td>Beverly Flatley</td>
            <td>691 Fisher Ridges</td>
            <td></td>
            <td>West London</td>
            <td>WA</td>
            <td>31182-9744</td>
          </tr>
          <tr>
            <th scope="row">75268</th>
            <td>Wilbur Abbott</td>
            <td>89922 D'Amore Squares</td>
            <td></td>
            <td>Lake Yasmine</td>
            <td>MT</td>
            <td>18468-3599</td>
          </tr>
          <tr>
            <th scope="row">14574</th>
            <td>Neal Gleichner</td>
            <td>6530 Lura Vista</td>
            <td></td>
            <td>Winonaside</td>
            <td>WV</td>
            <td>18644-7106</td>
          </tr>
          <tr>
            <th scope="row">57511</th>
            <td>Scott Toy</td>
            <td>4450 Lilla Square</td>
            <td></td>
            <td>Streichhaven</td>
            <td>IA</td>
            <td>69676-1209</td>
          </tr>
          <tr>
            <th scope="row">95340</th>
            <td>Derek Kohler</td>
            <td>2344 Domingo Plaza</td>
            <td></td>
            <td>Port Hortensestad</td>
            <td>CA</td>
            <td>70149-4207</td>
          </tr>
          <tr>
            <th scope="row">8792</th>
            <td>Minnie Hudson</td>
            <td>60315 Adan Spur</td>
            <td>Suite 083</td>
            <td>Weberside</td>
            <td>KS</td>
            <td>46486</td>
          </tr>
          <tr>
            <th scope="row">31112</th>
            <td>Brett Heidenreich</td>
            <td>617 Medhurst Points</td>
            <td>Apt. 289</td>
            <td>Littelton</td>
            <td>ID</td>
            <td>78278-5083</td>
          </tr>
          <tr>
            <th scope="row">59969</th>
            <td>Joey Koelpin</td>
            <td>455 Alexandrine Rue</td>
            <td>Apt. 939</td>
            <td>Wuckertfort</td>
            <td>IL</td>
            <td>36623</td>
          </tr>
          <tr>
            <th scope="row">24068</th>
            <td>Fred Moen</td>
            <td>31611 Aglae Creek</td>
            <td>Suite 278</td>
            <td>Port Aryanna</td>
            <td>PA</td>
            <td>81491</td>
          </tr>
          <tr>
            <th scope="row">53594</th>
            <td>Jessie Weimann</td>
            <td>09920 Terrence Village</td>
            <td>Suite 000</td>
            <td>Hudsonshire</td>
            <td>MD</td>
            <td>97533-5227</td>
          </tr>
          <tr>
            <th scope="row">88550</th>
            <td>Robert Mraz</td>
            <td>87594 Lincoln Branch</td>
            <td></td>
            <td>McCulloughfurt</td>
            <td>HI</td>
            <td>98434-5305</td>
          </tr>
          <tr>
            <th scope="row">64178</th>
            <td>Opal Rolfson</td>
            <td>56289 Hane Lane</td>
            <td>Suite 663</td>
            <td>East Jodymouth</td>
            <td>VT</td>
            <td>82268</td>
          </tr>
          <tr>
            <th scope="row">13118</th>
            <td>Debra Wolff</td>
            <td>168 Chaim Neck</td>
            <td></td>
            <td>Wisozkton</td>
            <td>TN</td>
            <td>01387-7832</td>
          </tr>
          <tr>
            <th scope="row">52038</th>
            <td>Tracey Effertz</td>
            <td>2651 Joel Springs</td>
            <td></td>
            <td>Rasheedfurt</td>
            <td>CA</td>
            <td>53734</td>
          </tr>
          <tr>
            <th scope="row">82377</th>
            <td>Tracy Ziemann</td>
            <td>21137 Humberto Stream</td>
            <td>Suite 282</td>
            <td>Maritzastad</td>
            <td>NJ</td>
            <td>32848</td>
          </tr>
          <tr>
            <th scope="row">81235</th>
            <td>Kurt Hoeger</td>
            <td>3560 Kassulke Roads</td>
            <td></td>
            <td>MacGyverborough</td>
            <td>TX</td>
            <td>13374-3731</td>
          </tr>
          <tr>
            <th scope="row">24793</th>
            <td>Nadine Botsford</td>
            <td>9225 Feeney Parkway</td>
            <td>Suite 298</td>
            <td>Baumbachburgh</td>
            <td>LA</td>
            <td>63724</td>
          </tr>
          <tr>
            <th scope="row">51769</th>
            <td>Vincent Powlowski</td>
            <td>259 Oberbrunner Rest</td>
            <td></td>
            <td>Mohrshire</td>
            <td>AZ</td>
            <td>18814-8859</td>
          </tr>
          <tr>
            <th scope="row">48142</th>
            <td>Jana Block</td>
            <td>5132 Graciela Summit</td>
            <td>Suite 656</td>
            <td>Barrowsmouth</td>
            <td>KY</td>
            <td>77291</td>
          </tr>
          <tr>
            <th scope="row">68904</th>
            <td>Tanya Steuber</td>
            <td>304 Cathrine Burg</td>
            <td></td>
            <td>West Halle</td>
            <td>IN</td>
            <td>59941-4507</td>
          </tr>
          <tr>
            <th scope="row">30315</th>
            <td>Tim Tillman</td>
            <td>6805 Zieme Villages</td>
            <td></td>
            <td>Port Celia</td>
            <td>FL</td>
            <td>30670</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
