import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Injectable } from '@angular/core';
import * as L from 'leaflet';
import Geocoder, { geocoders } from 'leaflet-control-geocoder';

@Injectable({
  providedIn: 'root',
})
export class GetUserLocalisationService implements AfterViewInit {
  private map: L.Map | undefined;
  private tiles: L.TileLayer | undefined;
  marker = new L.Marker([48.866667, 2.333333]);
  constructor(private httpClient: HttpClient) {}

  getUserIp() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong: L.LatLngTuple = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`,
      );
      if (this.map) {
        this.marker.setLatLng(latLong);
      } else {
        this.map = L.map('map').setView(latLong, 13);
        this.tiles?.addTo(this.map);
        this.marker.addTo(this.map);
      }
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private mapConfig = {
    center: [48.866667, 2.333333] as L.LatLngExpression,
    zoom: 10,
  };

  private tileLayerConfig = {
    maxZoom: 18,
    minZoom: 3,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  };

  initMap(): void {
    this.map = L.map('map', this.mapConfig);

    // new map
    this.tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      this.tileLayerConfig,
    );
    this.tiles.addTo(this.map);

    this.marker = L.marker([48.866667, 2.333333], {
      icon: L.icon({
        iconUrl: '/assets/imgs/marker.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      }),
    });
    this.marker.addTo(this.map);

    // pop up
    this.marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();

    // const customIcon = L.icon({
    //   iconUrl: '/assets/imgs/marker.png',
    //   iconSize: [25, 41],
    //   iconAnchor: [12, 41],
    //   popupAnchor: [1, -34],
    // });

    // input search control
    const GeocoderControl = new Geocoder();
    GeocoderControl.addTo(this.map);
    GeocoderControl.on('markgeocode', function (e) {
      console.log(e);
    });
  }
}
