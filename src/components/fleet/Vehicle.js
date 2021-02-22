class Vehicle {
  constructor(vehicle) {
    this.tripLog = vehicle.tripLog;
    this.name = vehicle.name;
    this.id = vehicle.id;
    this.class = `${this.name}-${this.id}`.replace(/\s/g, "-");
    this._marker = {};
    this.timer = null;
    this._setCurrentTripDetail(0);
  }
  _setCurrentTripDetail(routeIndex) {
    console.log("set trip detail", routeIndex, this.charge, this.tripLog);
    this.routeIndex = routeIndex;
    this.charge = this.tripLog[routeIndex].charge;
    this.latlng = this.tripLog[routeIndex].latlng;
    this.chargeLevelClass = this._getChargeLevelClass();
    this.gradient = `linear-gradient(to right,
        #05c3dd ${Math.floor(this.charge)}%, #000000 10%, red ${Math.floor(
      100 - this.charge
    )}% )`;
    this.description = this.getDescription();
  }
  getDescription() {
    //

    return `<div class="popup-veh-content ${this._getChargeLevelClass()}" >${
      this.name
    } <br/> Charge Level ${this.charge} %</div>`;
  }
  _getChargeLevelClass() {
    let chargeLevel = this.charge;
    return `${
      chargeLevel > 75
        ? "charged"
        : chargeLevel > 25
        ? "charge-warning"
        : "charge-alert"
    }`;
  }
}

export default Vehicle;
