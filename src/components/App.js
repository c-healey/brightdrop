import React from "react";

import "./App.css";

import Header from "./Header";

import Map from "./fleet/Map";

const App = () => {
  return (
    <div className="ui ">
      <Header />
      <div className="ui mobile reversed stackable grid bd_content">
        <div className="ui four wide column black inverted">
          <div className="ui segment padded black inverted">
            <h2>Mid West Region</h2>

            <div className="ui inverted relaxed divided list fleet-list-container"></div>
          </div>
        </div>
        <div className="ui twelve wide column blue inverted" id="map">
          <Map />
        </div>
      </div>
    </div>
  );
};
export default App;
