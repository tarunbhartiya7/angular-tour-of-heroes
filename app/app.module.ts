import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Before we can use two-way data binding for form inputs, 
//we need to import the FormsModule package in our Angular module
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }


