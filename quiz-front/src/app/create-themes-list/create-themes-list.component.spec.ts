import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThemesListComponent } from './create-themes-list.component';

describe('CreateThemesListComponent', () => {
  let component: CreateThemesListComponent;
  let fixture: ComponentFixture<CreateThemesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateThemesListComponent]
    });
    fixture = TestBed.createComponent(CreateThemesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
