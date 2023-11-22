import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzMusiqueComponent } from './quizz-musique.component';

describe('QuizzMusiqueComponent', () => {
  let component: QuizzMusiqueComponent;
  let fixture: ComponentFixture<QuizzMusiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzMusiqueComponent]
    });
    fixture = TestBed.createComponent(QuizzMusiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
