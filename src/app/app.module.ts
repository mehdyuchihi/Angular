import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';

@NgModule({
  declarations: [ //declaration des components
    AppComponent, ResidencesComponent,
  ],
  imports: [ //bib impo
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //compo par-def
})
export class AppModule { }


