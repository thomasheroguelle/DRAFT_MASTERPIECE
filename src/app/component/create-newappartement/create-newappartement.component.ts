import { Component } from '@angular/core';
import { IAppartement } from '../../../Model/AppartementModel/AppartementModel';
import { AppartementService } from '../../service/AppartementCRUD/appartement.service';
import { Router } from '@angular/router';
import { GetUserLocalisationService } from '../../service/UserLocalisation/get-user-localisation.service';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Injectable } from '@angular/core';
import * as L from 'leaflet';
import Geocoder from 'leaflet-control-geocoder';
import { BookMark } from '../../../Model/FavoriteBookMark/FavoriteBookMark';
@Component({
  selector: 'app-create-newappartement',
  templateUrl: './create-newappartement.component.html',
  styleUrl: './create-newappartement.component.css',
})
export class CreateNewappartementComponent {
  id: number = 0;
  address: string = '';
  description: string = '';
  price: number = 0;
  marker = new L.Marker([48.866667, 2.333333]);
  favorites!: BookMark;

  constructor(
    private masterPieceApi: AppartementService,
    private router: Router,
    private getUserLocalisation: GetUserLocalisationService,
  ) {}

  createNewAppartement(): void {
    const newAppartement: IAppartement = {
      id: 0,
      address: this.address,
      description: this.description,
      price: this.price,
      // location: {
      //   latitude: this.marker ? this.marker.getLatLng().lat : 0,
      //   longitude: this.marker ? this.marker.getLatLng().lng : 0,
      // },
      favorites: this.favorites,
    };

    this.masterPieceApi.createNewAppartement(newAppartement).subscribe(
      (response) => {
        console.log('appartement créé', response);
        console.log(response);
      },
      (error) => {
        console.error('erreur', error);
      },
    );
    this.router.navigate(['logements']);
  }
}
