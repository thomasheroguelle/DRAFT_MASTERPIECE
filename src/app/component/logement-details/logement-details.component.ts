import { Component } from '@angular/core';
import { AppartementService } from '../../service/AppartementCRUD/appartement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IAppartement } from '../../../Model/AppartementModel/AppartementModel';

@Component({
  selector: 'app-logement-details',
  templateUrl: './logement-details.component.html',
  styleUrl: './logement-details.component.css',
})
export class LogementDetailsComponent {
  product?: IAppartement;
  id: number = this.activated.snapshot.params['id'];
  constructor(
    private masterpieceApi: AppartementService,
    private activated: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getAppartementById();
  }

  getAppartementById() {
    this.masterpieceApi.getAppartementById(this.id).subscribe(
      (response) => {
        console.log(response);
        this.product = response;
      },
      (error) => {
        console.error('erreur', error);
      },
    );
  }
}
