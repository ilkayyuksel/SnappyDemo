import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorDashboardComponent } from './debtor-dashboard.component';

describe('DebtorDashboardComponent', () => {
  let component: DebtorDashboardComponent;
  let fixture: ComponentFixture<DebtorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtorDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebtorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
