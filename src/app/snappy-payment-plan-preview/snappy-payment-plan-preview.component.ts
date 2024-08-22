import { Component } from '@angular/core';
import {MobilePreviewComponent} from "../mobile-preview/mobile-preview.component";
import {
  SnappyPaymentPlanAdjustmentComponent
} from "../snappy-payment-plan-adjustment/snappy-payment-plan-adjustment.component";

@Component({
  selector: 'app-snappy-payment-plan-preview',
  standalone: true,
  imports: [
    MobilePreviewComponent,
    SnappyPaymentPlanAdjustmentComponent
  ],
  templateUrl: './snappy-payment-plan-preview.component.html',
  styleUrl: './snappy-payment-plan-preview.component.css'
})
export class SnappyPaymentPlanPreviewComponent {
  debtInfo = {
    totalAmount: 1000.00,
    minimumPayment: 50.00,
    firstInstallmentDate: '2023-09-01' // Example date
  };

}
