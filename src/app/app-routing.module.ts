import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './component/main-page/main-page.component';
import { BedroomComponent } from './component/bedroom/bedroom.component';
import { LocataireComponent } from './component/locataire/locataire.component';
import { RoommateComponent } from './component/roommate/roommate.component';
import { TenantlessapprtmComponent } from './component/tenantlessapprtm/tenantlessapprtm.component';
import { CreateNewappartementComponent } from './component/create-newappartement/create-newappartement.component';
import { MapComponent } from './component/map/map.component';
import { LogementDetailsComponent } from './component/logement-details/logement-details.component';
import { FavoritebookmarkComponent } from './component/favoritebookmark/favoritebookmark.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'bedroom', component: BedroomComponent },
  { path: 'locataire', component: LocataireComponent },
  { path: 'roommate', component: RoommateComponent },
  { path: 'nolocataire', component: TenantlessapprtmComponent },
  { path: 'createnewappartement', component: CreateNewappartementComponent },
  { path: 'map', component: MapComponent },
  { path: 'locataire/:id', component: LogementDetailsComponent },
  { path: 'favorites', component: FavoritebookmarkComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
