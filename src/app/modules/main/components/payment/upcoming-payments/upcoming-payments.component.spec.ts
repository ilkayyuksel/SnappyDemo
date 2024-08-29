import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingPaymentsComponent } from './upcoming-payments.component';

describe('UpcomingPaymentsComponent', () => {
  let component: UpcomingPaymentsComponent;
  let fixture: ComponentFixture<UpcomingPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingPaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
