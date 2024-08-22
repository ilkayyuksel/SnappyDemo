import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierRegistrationFormComponent } from './supplier-registration-form.component';

describe('SupplierRegistrationFormComponent', () => {
  let component: SupplierRegistrationFormComponent;
  let fixture: ComponentFixture<SupplierRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierRegistrationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
