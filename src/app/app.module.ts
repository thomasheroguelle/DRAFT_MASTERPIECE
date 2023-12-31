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
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CreateNewappartementComponent } from './component/create-newappartement/create-newappartement.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MapComponent } from './component/map/map.component';
import { LeafletEvent } from 'leaflet';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LogementDetailsComponent } from './component/logement-details/logement-details.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { FavoritebookmarkComponent } from './component/favoritebookmark/favoritebookmark.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BedroomComponent,
    TenantlessapprtmComponent,
    RoommateComponent,
    LocataireComponent,
    CreateNewappartementComponent,
    MapComponent,
    LogementDetailsComponent,
    SidenavComponent,
    FavoritebookmarkComponent,
    HomepageComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
