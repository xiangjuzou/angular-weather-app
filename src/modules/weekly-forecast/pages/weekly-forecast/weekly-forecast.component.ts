import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { commonWeather } from '../../../../models/weather-facade-models';
import { WeatherFacade } from '../../../../facade/weather.facade';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-weekly-forecast',
	templateUrl: './weekly-forecast.component.html',
	styleUrls: ['./weekly-forecast.component.css']
})
export class WeeklyForecastComponent implements OnInit {
	public weathers: Observable<commonWeather[]>;
	public value: string;
	// public details: commonWeather[];
	constructor(private facade: WeatherFacade, private router: Router, private activateRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activateRoute.paramMap.subscribe((params) => {
			this.weathers.forEach((weather) => {
				weather['locationName'] = params.get('locationName');
				weather['localtime'] = params.get('localtime');
			});
		});
	}


	public selectCity(city: string): void {
		this.weathers = this.facade.GetForecast(city);
	};

	public showDetail(weather: commonWeather) {
		this.router.navigateByUrl('/forecast/detail/' + weather.locationName + '/' + weather.localtime);
	};
}

	// public showDetail(weather: commonWeather) {
	//                this.detail = weather;
	// }

