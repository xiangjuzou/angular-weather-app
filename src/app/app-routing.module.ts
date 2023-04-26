import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { CurrentWeatherComponent } from './pages/current-weather/current-weather.component';
import { WeatherComparisonComponent } from './pages/weather-comparison/weather-comparison.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'current', component: CurrentWeatherComponent },
	{ path: 'comparison', component: WeatherComparisonComponent },
	{
		path: 'forecast', loadChildren: () => import('../modules/weekly-forecast/weekly-forecast.module')
			.then(m => m.WeeklyForecastModule)
	},
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
