import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnappyPaymentPlanPreviewComponent } from './snappy-payment-plan-preview.component';

describe('SnappyPaymentPlanPreviewComponent', () => {
  let component: SnappyPaymentPlanPreviewComponent;
  let fixture: ComponentFixture<SnappyPaymentPlanPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnappyPaymentPlanPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnappyPaymentPlanPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
