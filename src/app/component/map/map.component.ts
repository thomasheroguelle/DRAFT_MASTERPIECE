import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { GetUserLocalisationService } from '../../service/UserLocalisation/get-user-localisation.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  constructor(
    private getUserLocalisation: GetUserLocalisationService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.initMap();
  }
  initMap() {
    this.getUserLocalisation.initMap();
  }

  getUserIp() {
    this.getUserLocalisation.getUserIp();
  }

  goBack() {
    this.location.back();
  }
}
