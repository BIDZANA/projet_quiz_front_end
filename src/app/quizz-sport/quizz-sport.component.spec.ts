import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzSportComponent } from './quizz-sport.component';

describe('QuizzSportComponent', () => {
  let component: QuizzSportComponent;
  let fixture: ComponentFixture<QuizzSportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzSportComponent]
    });
    fixture = TestBed.createComponent(QuizzSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
