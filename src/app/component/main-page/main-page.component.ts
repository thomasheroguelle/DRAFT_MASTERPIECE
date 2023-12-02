import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private route: Router) { }
  isClicked: boolean = false;
  selectedCategoryTitle: string = ''
  selectedCategoryParagraphe: string = ''

  openDialog() {
    this.isClicked = !this.isClicked;
  }
  navigateToBedroomPage() {
    this.selectedCategoryTitle = 'Chambre'
    this.selectedCategoryParagraphe =  'Trouvez la chambre qui vous correspond'
    // this.route.navigate(['bedroom'])
  }
  navigateToLocatairePage() {
    this.selectedCategoryTitle = 'Locataire'
    this.selectedCategoryParagraphe =  'Trouvez le meilleur des locataires'
    this.route.navigate(['locataire'])
  }
  navigateToRoommatePage() {
    this.selectedCategoryTitle = 'Colocataire'
    this.selectedCategoryParagraphe =  'Trouvez le colocataire parfait'
    // this.route.navigate(['roommate'])
  }
  navigateToNoLocatairePage() {
    this.selectedCategoryTitle = 'Appartement'
    this.selectedCategoryParagraphe =  'Trouvez le logement parfait'
    // this.route.navigate(['nolocataire'])
  }





}