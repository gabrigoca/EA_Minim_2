import { Component } from '@angular/core';
import {StationServices} from '../../services/station.services';
import {BikeServices} from '../../services/bike.services';
import {DataService} from '../../services/data.services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', '../../res/fonts/util.css', '../../res/vendor/bootstrap/css/bootstrap.min.css', '../../res/fonts/font-awesome-4.7.0/css/font-awesome.min.css', '../../res/fonts/iconic/css/material-design-iconic-font.min.css', '../../res/vendor/animate/animate.css', '../../res/vendor/css-hamburgers/hamburgers.min.css', '../../res/vendor/animsition/css/animsition.min.css',
    '../../res/vendor/select2/select2.min.css', '../../res/vendor/daterangepicker/daterangepicker.css'],
})
export class HomePage {
  llista: Object;
  llistaUnBikes: Object;

  constructor(
      private stationService: StationServices,
      private bikeService: BikeServices,
      private dataService: DataService,
      private router: Router,
      private activatedRoute:ActivatedRoute
  ) {
      activatedRoute.params.subscribe(val => {
          this.llistaStations();
      });
  }

  ngOnInit() {
      this.llistaStations();
  }

  llistaStations() {
    console.log('Operació de demanar estacions realitzada al BackEnd:');
    this.stationService.obtainStations()
        .subscribe(response => {
              console.log('Resposta del BackEnd' + response.body);
              // Podem filtrar per tots els codis 2XX
              if (response.status == 200) {
                this.llista = response.body;
              } else {
                // Error desconegut
                console.log('Error');
              }
            },
            err => {
              console.log('Error del BackEnd' + err);
              // Podem filtrar per tots els altres codis
              if (err.status == 404) {
                console.log('No hi han assignatures');
              } else {
                // Error desconegut
                console.log('Error');
              }
            });
  }
  botoLlista(id) {
    this.dataService.changeStationId(id);
    this.router.navigateByUrl('/station');
  }

  llistaBikes() {
    console.log('Operació de demanar bicicletes realitzada al BackEnd:');
    this.bikeService.obtainUnassinedBikes()
        .subscribe(response => {
              console.log('Resposta del BackEnd' + response.body);
              if (response.status == 200) {
                this.llistaUnBikes = response.body;
              } else {
                // Error desconegut
                console.log('Error');
              }
            },
            err => {
              console.log('Error del BackEnd' + err);
              if (err.status == 404) {
                console.log('No hi han assignatures');
              } else {
                // Error desconegut
                console.log('Error');
              }
            });
  }

}
