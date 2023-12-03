import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { GetUserLocalisationService } from '../../service/get-user-localisation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  constructor(private getUserLocalisation: GetUserLocalisationService) {}

  ngOnInit() {
    this.initMap();
  }
  initMap() {
    this.getUserLocalisation.initMap();
  }

  getUserIp() {
    this.getUserLocalisation.getUserIp();
  }
}
