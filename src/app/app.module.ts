import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CurrentWeatherComponent } from './pages/current-weather/current-weather.component';
import { WeatherComparisonComponent } from './pages/weather-comparison/weather-comparison.component';;
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WeatherFacade } from '../facade/weather.facade';
import { WeatherApiService } from '../services/weather-api.service';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { nl_NL } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import nl from '@angular/common/locales/nl';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

import { SharedModule } from '../modules/shared/shared.module';

registerLocaleData(nl);

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		SharedModule,

		NzInputModule,
		NzIconModule,
		NzButtonModule,
		NzAutocompleteModule,
	],
	
	declarations: [
		AppComponent,
		HomeComponent,
		CurrentWeatherComponent,
		WeatherComparisonComponent,
		PageNotFoundComponent	
	],

	providers: [
		WeatherFacade,
		WeatherApiService,
		{ provide: NZ_I18N, useValue: nl_NL }
	],
		
   bootstrap:[ AppComponent ]
})
export class AppModule { }
