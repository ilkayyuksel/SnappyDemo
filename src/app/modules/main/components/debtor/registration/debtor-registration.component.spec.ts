import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorRegistrationComponent } from './debtor-registration.component';

describe('DebtorRegistrationFormComponent', () => {
  let component: DebtorRegistrationComponent;
  let fixture: ComponentFixture<DebtorRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtorRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
