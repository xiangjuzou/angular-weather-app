import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComparisonComponent } from './weather-comparison.component';

describe('WeatherComparisonComponent', () => {
  let component: WeatherComparisonComponent;
  let fixture: ComponentFixture<WeatherComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherComparisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
