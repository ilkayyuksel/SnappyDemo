import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorCompanyRegistrationComponent } from './debtor-company-registration.component';

describe('DebtorRegistrationFormComponent', () => {
  let component: DebtorCompanyRegistrationComponent;
  let fixture: ComponentFixture<DebtorCompanyRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtorCompanyRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtorCompanyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
