import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphabetsComponent } from './alphabets/alphabets.component';
import { NumbersComponent } from './numbers/numbers.component';
import { ObjectsComponent } from './objects/objects.component';
import { PoemsComponent } from './poems/poems.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { AnimalsComponent } from './animals/animals.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphabetsComponent,
    NumbersComponent,
    ObjectsComponent,
    PoemsComponent,
    LandingPageComponent,
    FooterComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
