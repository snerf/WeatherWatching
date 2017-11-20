import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { FahrenheitToCelsius } from './pipes/fahrenheit.to.celsius.pipe';
import { TranslateWeatherType } from './pipes/translate.weather.type';

@NgModule({
  declarations: [
      AppComponent, FahrenheitToCelsius, TranslateWeatherType
  ],
  imports: [
      BrowserModule, HttpModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
