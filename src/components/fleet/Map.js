import React from "react";
import L from "leaflet";
import { Regions } from "../../data/fleetData";
// import FleetList from "./FleetList";
import Vehicle from "./Vehicle";

import "./Map.css";

class Map extends React.Component {
  #map;
  #mapEvent;
  #mapZoomLevel = 6;
  #marker;
  #coords;
  #interval = 3000;

  #region = Regions["NorthEast"];
  #fleet = this.#region.fleet;

  #fleetVehicles = [];
  #fleetListEl;

  componentDidMount() {
    this.#fleetListEl = document.querySelector(".fleet-list-container");
    this._getPosition();
  }

  _getPosition() {
    // get region from sidebar
    if (this.#map) this.#map.remove();
    this._loadMap();
  }

  _loadMap = () => {
    this.#coords = this.#region.latlng;
    this.#map = L.map("map").setView(this.#coords, this.#mapZoomLevel);
    // console.log(map)
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", (mapE) => {
      const { lat, lng } = mapE.latlng;
      this.renderMarker([lat, lng]);
    });
    this._renderFleet(this.#region);
  };
  _renderFleet() {
    this.#fleet.forEach((veh) => {
      const fleetVehicle = new Vehicle(veh);
      this.#fleetVehicles = [...this.#fleetVehicles, fleetVehicle];
      this._renderFleetUpdates(fleetVehicle);
    });
  }
  LeafIcon = L.Icon.extend({
    options: {
      shadowUrl: "logo-pin-shadow.png",
      iconSize: [38, 38],
      shadowSize: [38, 38],
      iconAnchor: [0, 38],
      shadowAnchor: [-4, 34],
      popupAnchor: [19, -38],
    },
  });
  renderMarker(latlng, description = "", className = "") {
    this.#coords = latlng;
    console.log("renderMarker");
    let bdPinIcon = new this.LeafIcon({ iconUrl: "logo-pin-blue.png" });
    this.#marker = L.marker(this.#coords, { icon: bdPinIcon })
      // L.marker(coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${className}`,
        })
      )
      .setPopupContent(
        description.length ? description : `POP UP${this.#coords}`
      )
      .openPopup();
    return this.#marker;
  }
  _renderListItem(vehicle) {
    return `
        <div class="item sidebar-list-item " style='background: ${vehicle.gradient}'>
        <div class="content sidebar-list-content">
          ${vehicle.name} 
          <span class='${vehicle.class}'>Charge = ${vehicle.charge} %</span>
        </div>
      </div>
      `;
  }
  renderVehicleToList(vehicle) {
    const html = `
    <div class='${vehicle.class}'>
    ${this._renderListItem(vehicle)}
      </div>
    </div>
    `;

    this.#fleetListEl.insertAdjacentHTML("beforeend", html);
  }
  _renderUpdateToList(vehicle) {
    document.querySelector(
      `.${vehicle.class}`
    ).innerHTML = this._renderListItem(vehicle);
  }
  render() {
    return <div></div>;
  }
  _renderFleetUpdates(fleetVehicle) {
    const timerId = setInterval(() => {
      let routeIndex = fleetVehicle.routeIndex;
      let tripLog = fleetVehicle.tripLog;
      let latlng = fleetVehicle.latlng;

      if (routeIndex === 0) {
        fleetVehicle._marker = this.renderMarker(
          latlng,
          fleetVehicle.description
          // fleetVehicle.chargeLevelClass
        );
        this.renderVehicleToList(fleetVehicle);
      } else {
        // console.log("move marker", this.#marker);
        fleetVehicle._marker.setLatLng(latlng);
        fleetVehicle._marker.setPopupContent(fleetVehicle.description);

        this._renderUpdateToList(fleetVehicle);
      }

      if (routeIndex >= tripLog.length - 1) {
        clearInterval(timerId);
      } else {
        routeIndex = routeIndex + 1;
        fleetVehicle._setCurrentTripDetail(routeIndex);
      }
    }, this.#interval);
  }
}
export default Map;
