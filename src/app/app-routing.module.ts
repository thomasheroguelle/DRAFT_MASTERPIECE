import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './component/main-page/main-page.component';
import { BedroomComponent } from './component/bedroom/bedroom.component';
import { LocataireComponent } from './component/locataire/locataire.component';
import { RoommateComponent } from './component/roommate/roommate.component';
import { TenantlessapprtmComponent } from './component/tenantlessapprtm/tenantlessapprtm.component';
import { LoginpageComponent } from './component/loginpage/loginpage.component';

const routes: Routes = [
  { path: "", component: LoginpageComponent },
  { path: "main", component: MainPageComponent },
  { path: "bedroom", component: BedroomComponent },
  { path: "locataire", component: LocataireComponent },
  { path: "roommate", component: RoommateComponent },
  { path: "nolocataire", component: TenantlessapprtmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
