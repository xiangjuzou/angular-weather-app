import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyForecastDetailComponent } from './weekly-forecast-detail.component';

describe('WeeklyForecastDetailComponent', () => {
  let component: WeeklyForecastDetailComponent;
  let fixture: ComponentFixture<WeeklyForecastDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyForecastDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyForecastDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
