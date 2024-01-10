import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppartementService } from '../../service/AppartementCRUD/appartement.service';
import { HttpClient } from '@angular/common/http';
import { IAppartement } from '../../../Model/AppartementModel/AppartementModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logements',
  templateUrl: './logements.component.html',
  styleUrl: './logements.component.css',
})
export class LogementsComponent {
  constructor(
    private router: Router,
    private masterPieceApi: AppartementService,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
  ) {}

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
}
