import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-payment-summary',
  standalone: true,
  imports: [],
  templateUrl: './payment-summary.component.html',
  styleUrl: './payment-summary.component.css'
})
export class PaymentSummaryComponent {
  @Input() totalDue!: number;
  @Input() totalPaid!: number;
  @Input() remainingBalance!: number;
}
