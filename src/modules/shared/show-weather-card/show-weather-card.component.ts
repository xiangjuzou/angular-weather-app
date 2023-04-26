import { Component,Input} from '@angular/core';
import { commonWeather } from '../../../models/weather-facade-models';


@Component({
  selector: 'app-show-weather-card',
  templateUrl: './show-weather-card.component.html',
  styleUrls: ['./show-weather-card.component.css']
})
export class ShowWeatherCardComponent  {
	@Input() weather: commonWeather;	
}
