import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AlphabetsComponent } from './alphabets/alphabets.component';
import { NumbersComponent } from './numbers/numbers.component';
import { ObjectsComponent } from './objects/objects.component';
import { PoemsComponent } from './poems/poems.component';
import { AnimalsComponent } from './animals/animals.component';

const routes: Routes = [
  { path: 'alphabets', component: AlphabetsComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'objects', component: ObjectsComponent },
  { path: 'poems', component: PoemsComponent },
  { path: 'landingpage', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
