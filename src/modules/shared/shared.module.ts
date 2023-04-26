import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowWeatherCardComponent } from './show-weather-card/show-weather-card.component';

@NgModule({
	declarations: [
		ShowWeatherCardComponent
	],

  imports: [
	  CommonModule,
	],
  
   exports: [
    ShowWeatherCardComponent
  ]
})
export class SharedModule { }
