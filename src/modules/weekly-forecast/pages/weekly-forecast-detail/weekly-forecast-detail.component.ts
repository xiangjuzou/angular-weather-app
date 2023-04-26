import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { commonWeather } from '../../../../models/weather-facade-models';
import { WeatherFacade } from '../../../../facade/weather.facade';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weekly-forecast-detail',
  templateUrl: './weekly-forecast-detail.component.html',
  styleUrls: ['./weekly-forecast-detail.component.css']
})
export class WeeklyForecastDetailComponent {

	public weather: Observable<commonWeather>;

	constructor(private facade: WeatherFacade, private router: ActivatedRoute) {
		
		router.paramMap.subscribe( (rout) =>
			this.refreshData( rout.get('city'), rout.get('date'))
		);
	}

	private refreshData(city: string, date: string) {
		this.weather = this.facade.GetForecast(city).pipe(
			map( arr=> arr.find( crurrentWeather => crurrentWeather.localtime === date))
		);
	}

}
