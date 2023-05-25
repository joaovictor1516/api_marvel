import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavebarComponent } from '../navebar/navebar.component';
import { HeroisComponent } from '../herois/perssonagens/herois.component';

@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    HeroisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
