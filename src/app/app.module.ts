import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PokedexListComponent } from './components/pokedex-list/pokedex-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// angular material
import {ScrollingModule} from '@angular/cdk/scrolling'; 
import {MatCardModule} from '@angular/material/card'; 

    export const APIURL = new InjectionToken<string>('');

    export const LISTADO= new InjectionToken<string>('');

    const getListado=()=>'Listado BlueApp'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokedexListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ScrollingModule,
    MatCardModule
  ],
  bootstrap: [AppComponent],
  providers: [
   { provide: APIURL, useValue: '../assets/data/pokedex.json' },
   { provide: LISTADO, useFactory: getListado}
  
   ]
})
export class AppModule { }
