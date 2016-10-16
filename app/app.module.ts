import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Before we can use two-way data binding for form inputs, 
//we need to import the FormsModule package in our Angular module
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
