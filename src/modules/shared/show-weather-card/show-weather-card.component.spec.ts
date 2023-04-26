import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWeatherCardComponent } from './show-weather-card.component';

describe('ShowWeatherCardComponent', () => {
  let component: ShowWeatherCardComponent;
  let fixture: ComponentFixture<ShowWeatherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowWeatherCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
