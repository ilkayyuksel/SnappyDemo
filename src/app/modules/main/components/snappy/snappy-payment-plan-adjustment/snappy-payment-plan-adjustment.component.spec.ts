import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnappyPaymentPlanAdjustmentComponent } from './snappy-payment-plan-adjustment.component';

describe('SnappyPaymentPlanAdjustmentComponent', () => {
  let component: SnappyPaymentPlanAdjustmentComponent;
  let fixture: ComponentFixture<SnappyPaymentPlanAdjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnappyPaymentPlanAdjustmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnappyPaymentPlanAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
