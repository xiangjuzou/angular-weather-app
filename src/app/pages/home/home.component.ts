import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { commonWeather } from '../../../models/weather-facade-models';
import { WeatherFacade } from '../../../facade/weather.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	public city = 'Deventer';
	public weather: Observable<commonWeather>;

	constructor(private facade: WeatherFacade) {
		this.weather = this.facade.GetCurrentWeather(this.city);
	}

 }
