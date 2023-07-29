import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysuccessComponent } from './surveysuccess.component';

describe('SurveysuccessComponent', () => {
  let component: SurveysuccessComponent;
  let fixture: ComponentFixture<SurveysuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveysuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveysuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
