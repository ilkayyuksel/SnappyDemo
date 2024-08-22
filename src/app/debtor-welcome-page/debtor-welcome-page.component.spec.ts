import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorWelcomePageComponent } from './debtor-welcome-page.component';

describe('DebtorWelcomePageComponent', () => {
  let component: DebtorWelcomePageComponent;
  let fixture: ComponentFixture<DebtorWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtorWelcomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebtorWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
