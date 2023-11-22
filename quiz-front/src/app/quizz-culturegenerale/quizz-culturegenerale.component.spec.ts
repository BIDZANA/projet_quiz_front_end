import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzCulturegeneraleComponent } from './quizz-culturegenerale.component';

describe('QuizzCulturegeneraleComponent', () => {
  let component: QuizzCulturegeneraleComponent;
  let fixture: ComponentFixture<QuizzCulturegeneraleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzCulturegeneraleComponent]
    });
    fixture = TestBed.createComponent(QuizzCulturegeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
