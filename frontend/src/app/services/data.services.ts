import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  //Clase per intercambiar el StationId entre els components
  //main i stationdetail.

  private originalStationId = new BehaviorSubject("0");
  clickedStationId = this.originalStationId.asObservable()


  private originalBikeId = new BehaviorSubject("0");
  clickedBikeId = this.originalBikeId.asObservable()

  constructor() { }

  changeStationId(id: string) {
    this.originalStationId.next(id)
  }

  changeBikeId(id: string) {
    this.originalBikeId.next(id)
  }


}
