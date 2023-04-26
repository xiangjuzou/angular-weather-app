import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeeklyForecastDetailComponent } from './pages/weekly-forecast-detail/weekly-forecast-detail.component';
import { WeeklyForecastComponent } from './pages/weekly-forecast/weekly-forecast.component';


const routes: Routes = [
	{ path: '', component: WeeklyForecastComponent },
	{ path: 'detail/:city/:date', component: WeeklyForecastDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeeklyForecastRoutingModule {}
