import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: L.Map | undefined;
  private tiles: L.TileLayer | undefined;
  marker = new L.Marker([48.866667, 2.333333,]);

  private mapConfig = {
    center: [48.866667, 2.333333,] as L.LatLngExpression,
    zoom: 10,
  };

  private tileLayerConfig = {
    maxZoom: 18,
    minZoom: 3,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  };


  private initMap(): void {
    this.map = L.map('map', this.mapConfig);

    this.tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', this.tileLayerConfig);
    this.tiles.addTo(this.map);

    this.marker = L.marker([48.866667, 2.333333]);
    this.marker.addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
