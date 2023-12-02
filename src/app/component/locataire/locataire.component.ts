import { Component } from '@angular/core';
import { MasterpieceapiService } from '../../service/masterpieceapi.service';
import { Observable } from 'rxjs';
import { IAppartement } from '../../AppartementModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrl: './locataire.component.css'
})
export class LocataireComponent {
  constructor(private router: Router, private masterPieceApi: MasterpieceapiService) { }


  createNewAppartementRedirection() {
    this.router.navigate(['createnewappartement'])
  }

  ngOnInit() {
    this.getAppartements();
  }

  getAppartementsArray: IAppartement[] = [];
  locationNumber: number | undefined;



  getAppartements(): Observable<IAppartement[]> {
    this.masterPieceApi.getAppartements().subscribe(
      (response) => {
        console.log("appt récupéré", response);
        this.getAppartementsArray = response;
        this.locationNumber = this.getAppartementsArray.length;
      },
      (error) => {
        console.error("erreur", error);
      }
    );
    return this.masterPieceApi.getAppartements();
  }
}
