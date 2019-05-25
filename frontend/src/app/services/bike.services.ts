import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Environment } from "./environment";

@Injectable({
  providedIn: 'root'
})
export class BikeServices {

  environment: Environment;

  constructor(private http: HttpClient) {
    this.environment = new Environment();
  }

  obtainBike(bikeId) {
    return this.http.get(this.environment.urlBike + "/"+bikeId, {observe: 'response'})
  }
  addBike(stationId, bikeId) {
    return this.http.get(this.environment.urlBike + "/"+stationId+"/"+ bikeId, {observe: 'response'})
  }
  obtainUnassinedBikes() {
    return this.http.get(this.environment.urlBike + "/un", {observe: 'response'})
  }
}
