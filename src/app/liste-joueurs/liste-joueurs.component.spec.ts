import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeJoueursComponent } from './liste-joueurs.component';

describe('ListeJoueursComponent', () => {
  let component: ListeJoueursComponent;
  let fixture: ComponentFixture<ListeJoueursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeJoueursComponent]
    });
    fixture = TestBed.createComponent(ListeJoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
