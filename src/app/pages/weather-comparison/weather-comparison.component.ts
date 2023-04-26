import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { commonWeather } from '../../../models/weather-facade-models';
import { WeatherFacade } from '../../../facade/weather.facade';

@Component({
  selector: 'app-weather-comparison',
  templateUrl: './weather-comparison.component.html',
  styleUrls: ['./weather-comparison.component.scss']
})
export class WeatherComparisonComponent {
	public weathers: Observable<[commonWeather, commonWeather]>
	public value1: string;
	public value2: string;

	constructor(private facade: WeatherFacade) {
	}

	public selectCities(city1: string, city2: string): void {
		this.weathers = this.facade.GetComparison(city1, city2);
	}
}
