import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierWelcomeComponent } from './supplier-welcome.component';

describe('SupplierWelcomePageComponent', () => {
  let component: SupplierWelcomeComponent;
  let fixture: ComponentFixture<SupplierWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierWelcomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
