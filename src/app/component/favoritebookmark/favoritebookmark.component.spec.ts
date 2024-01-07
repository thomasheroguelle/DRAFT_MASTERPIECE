import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritebookmarkComponent } from './favoritebookmark.component';

describe('FavoritebookmarkComponent', () => {
  let component: FavoritebookmarkComponent;
  let fixture: ComponentFixture<FavoritebookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritebookmarkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritebookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
