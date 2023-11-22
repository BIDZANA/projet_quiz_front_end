import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzCinemaComponent } from './quizz-cinema.component';

describe('QuizzCinemaComponent', () => {
  let component: QuizzCinemaComponent;
  let fixture: ComponentFixture<QuizzCinemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzCinemaComponent]
    });
    fixture = TestBed.createComponent(QuizzCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
