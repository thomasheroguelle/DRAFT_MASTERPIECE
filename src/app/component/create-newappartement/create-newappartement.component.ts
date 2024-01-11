import { Component } from '@angular/core';
import { IAppartement } from '../../../Model/AppartementModel/AppartementModel';
import { AppartementService } from '../../service/AppartementCRUD/appartement.service';
import { Router, RouterModule } from '@angular/router';
import { GetUserLocalisationService } from '../../service/UserLocalisation/get-user-localisation.service';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Injectable } from '@angular/core';
import * as L from 'leaflet';
import Geocoder from 'leaflet-control-geocoder';
import { BookMark } from '../../../Model/FavoriteBookMark/FavoriteBookMark';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { UploadfileComponent } from '../uploadfile/uploadfile.component';
@Component({
  selector: 'app-create-newappartement',
  templateUrl: './create-newappartement.component.html',
  styleUrl: './create-newappartement.component.css',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,
    UploadfileComponent,
  ],
})
export class CreateNewappartementComponent {
  id: number = 0;
  address: string = '';
  description: string = '';
  price: number = 2500;
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
