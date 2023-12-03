import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantlessapprtmComponent } from './tenantlessapprtm.component';

describe('TenantlessapprtmComponent', () => {
  let component: TenantlessapprtmComponent;
  let fixture: ComponentFixture<TenantlessapprtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantlessapprtmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TenantlessapprtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
