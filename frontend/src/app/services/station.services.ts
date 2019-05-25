import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Environment } from "./environment";

@Injectable({
  providedIn: 'root'
})
export class StationServices {

  environment: Environment;

  constructor(private http: HttpClient) {
    this.environment = new Environment();
  }

  obtainStations() {
    return this.http.get(this.environment.urlStation, {observe: 'response'})
  }

  obtainStation(stationId) {
    return this.http.get(this.environment.urlStation  + "/"+stationId, {observe: 'response'})
  }

  obtainStationBikes(stationId) {
    return this.http.get(this.environment.urlStation  + "/bikes/"+stationId, {observe: 'response'})
  }
  deleteBike(BikeId,StationId){
    return this.http.delete(this.environment.urlStation  + "/bike/"+StationId+"/"+BikeId, {observe: 'response'})
  }

  addBike(BikeId,StationId){
    return this.http.get(this.environment.urlStation  + "/addbike/"+StationId+"/"+BikeId, {observe: 'response'})
  }

  addStation(station) {
    return this.http.post(this.environment.urlStation ,station, {observe: 'response'})
  }
}
