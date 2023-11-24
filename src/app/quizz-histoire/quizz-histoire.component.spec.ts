import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzHistoireComponent } from './quizz-histoire.component';

describe('QuizzHistoireComponent', () => {
  let component: QuizzHistoireComponent;
  let fixture: ComponentFixture<QuizzHistoireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzHistoireComponent]
    });
    fixture = TestBed.createComponent(QuizzHistoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
