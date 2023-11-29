import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './component/main-page/main-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BedroomComponent } from './component/bedroom/bedroom.component';
import { TenantlessapprtmComponent } from './component/tenantlessapprtm/tenantlessapprtm.component';
import { RoommateComponent } from './component/roommate/roommate.component';
import { LocataireComponent } from './component/locataire/locataire.component';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BedroomComponent,
    TenantlessapprtmComponent,
    RoommateComponent,
    LocataireComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
