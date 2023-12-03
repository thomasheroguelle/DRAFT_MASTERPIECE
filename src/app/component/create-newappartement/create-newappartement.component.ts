import { Component } from '@angular/core';
import { IAppartement } from '../../AppartementModel';
import { MasterpieceapiService } from '../../service/masterpieceapi.service';
import { Router } from '@angular/router';
import { GetUserLocalisationService } from '../../service/get-user-localisation.service';

@Component({
  selector: 'app-create-newappartement',
  templateUrl: './create-newappartement.component.html',
  styleUrl: './create-newappartement.component.css',
})
export class CreateNewappartementComponent {
  id: number = 0;
  title: string = '';
  description: string = '';
  price: number = 0;

  constructor(
    private masterPieceApi: MasterpieceapiService,
    private router: Router,
  ) {}

  createNewAppartement(): void {
    const newAppartement: IAppartement = {
      id: 0,
      title: this.title,
      description: this.description,
      price: this.price,
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
    this.router.navigate(['locataire']);
  }
}
