import { Component } from '@angular/core';
import { MasterpieceapiService } from '../../service/SpringCRUD/masterpieceapi.service';
import { Observable, switchMap } from 'rxjs';
import { IAppartement } from '../../../Model/AppartementModel/AppartementModel';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import L from 'leaflet';

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrl: './locataire.component.css',
})
export class LocataireComponent {
  constructor(
    private router: Router,
    private masterPieceApi: MasterpieceapiService,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
  ) {}

  createNewAppartementRedirection() {
    this.router.navigate(['createnewappartement']);
  }

  ngOnInit() {
    this.getAppartements();
  }

  getAppartementsArray: IAppartement[] = [];
  locationNumber?: number;
  getLocationDetail?: IAppartement;

  getAppartements(): Observable<IAppartement[]> {
    this.masterPieceApi.getAppartements().subscribe(
      (response) => {
        console.log('appt récupéré', response);
        this.getAppartementsArray = response;
        this.locationNumber = this.getAppartementsArray.length;
      },
      (error) => {
        console.error('erreur', error);
      },
    );
    return this.masterPieceApi.getAppartements();
  }

  getDetails() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getLocationDetail = this.getAppartementsArray.find(
      (location) => location.id === id,
    );
    if (this.getLocationDetail) {
      console.log(this.getLocationDetail);
    } else {
      console.error("pas d'id trouvé", id);
    }
  }
}
