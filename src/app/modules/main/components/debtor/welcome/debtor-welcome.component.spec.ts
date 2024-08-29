import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorWelcomeComponent } from './debtor-welcome.component';

describe('DebtorWelcomePageComponent', () => {
  let component: DebtorWelcomeComponent;
  let fixture: ComponentFixture<DebtorWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtorWelcomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtorWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
