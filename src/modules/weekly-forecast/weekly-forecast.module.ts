import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WeeklyForecastRoutingModule } from './weekly-forecast-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { WeeklyForecastComponent } from './pages/weekly-forecast/weekly-forecast.component';
import { WeeklyForecastDetailComponent } from './pages/weekly-forecast-detail/weekly-forecast-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		WeeklyForecastRoutingModule,
		SharedModule,
		FormsModule,

		NzInputModule,
		NzIconModule,
		NzButtonModule,
		NzAutocompleteModule,
	],

	declarations: [
		WeeklyForecastComponent,
		WeeklyForecastDetailComponent
	],
})
export class WeeklyForecastModule { }
