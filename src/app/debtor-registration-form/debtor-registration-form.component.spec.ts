import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorRegistrationFormComponent } from './debtor-registration-form.component';

describe('DebtorRegistrationFormComponent', () => {
  let component: DebtorRegistrationFormComponent;
  let fixture: ComponentFixture<DebtorRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtorRegistrationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebtorRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
