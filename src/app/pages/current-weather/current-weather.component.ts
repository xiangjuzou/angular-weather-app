import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { commonWeather } from '../../../models/weather-facade-models';
import { WeatherFacade } from '../../../facade/weather.facade';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
	public weather: Observable<commonWeather>;
	public value: string;

	constructor(private facade: WeatherFacade) {
	}

	public selectCity(city: string): void {
		this.weather = this.facade.GetCurrentWeather(city);
	}
}
