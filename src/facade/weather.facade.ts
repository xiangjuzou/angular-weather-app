import { Injectable } from '@angular/core';
import { WeatherApiService } from '../services/weather-api.service';
import { map, Observable } from 'rxjs';
import { commonWeather } from '../models/weather-facade-models';
import { CurrentWeather } from '../models/weather-api-models';

@Injectable({
	providedIn: 'root'
})
export class WeatherFacade {
	constructor(private weatherApi: WeatherApiService) { }

	public GetCurrentWeather(location: string): Observable<commonWeather> {
		return this.weatherApi.getCurrentWeather(location).pipe(
			map(curWeather => this.MapCurrentWeather(curWeather))
		);
	}

	public GetComparison(locationOne: string, locationTwo: string): Observable<[commonWeather, commonWeather]> {
		return this.weatherApi.getWeatherComparison(locationOne, locationTwo).pipe(
			map(weatherArr => [this.MapCurrentWeather(weatherArr[0]), this.MapCurrentWeather(weatherArr[1])])
		);
	}

	public GetForecast(location: string): Observable<commonWeather[]> {
		return this.weatherApi.getWeatherForecast(location).pipe(
			map(X => X.forecast.forecastday.map(Y =>
			({
				locationName: X.location.name,
				country: X.location.country,
				localtime: Y.date,
				temp: Y.day.maxtemp_c,
				feelTemp: undefined,
				condition: Y.day.condition.text,
				conditionIcon: Y.day.condition.icon,
				wind: Y.day.maxwind_kph
			} as commonWeather)
			)));
	}

	private MapCurrentWeather(curWeather: CurrentWeather): commonWeather {
		return ({
			locationName: curWeather.location.name,
			country: curWeather.location.country,
			localtime: curWeather.location.localtime,
			temp: curWeather.current.temp_c,
			feelTemp: curWeather.current.feelslike_c,
			condition: curWeather.current.condition.text,
			conditionIcon: curWeather.current.condition.icon,
			wind: curWeather.current.wind_kph,
			windDirection: curWeather.current.wind_dir
		} as commonWeather)
	}

}
