import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewappartementComponent } from './create-newappartement.component';

describe('CreateNewappartementComponent', () => {
  let component: CreateNewappartementComponent;
  let fixture: ComponentFixture<CreateNewappartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateNewappartementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateNewappartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
