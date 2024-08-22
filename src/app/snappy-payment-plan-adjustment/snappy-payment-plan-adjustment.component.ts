import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-snappy-payment-plan-adjustment',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgForOf
  ],
  templateUrl: './snappy-payment-plan-adjustment.component.html',
  styleUrl: './snappy-payment-plan-adjustment.component.css'
})
export class SnappyPaymentPlanAdjustmentComponent {
  @Input() debtInfo!: { totalAmount: number; minimumPayment: number; firstInstallmentDate: string };
  maxPayment!: number;
  installmentAmount!: number;
  months!: number;

  ngOnInit(): void {
    this.maxPayment = this.debtInfo.totalAmount / 2;
    this.installmentAmount = this.debtInfo.minimumPayment;
    this.calculateMonths();
  }

  calculateMonths(): void {
    const calculatedMonths = Math.ceil(this.debtInfo.totalAmount / this.installmentAmount);
    this.months = calculatedMonths > 60 ? 60 : calculatedMonths; // Cap at 60 months
  }

  handleInstallmentChange(event: Event): void {
    const value = parseFloat((event.target as HTMLInputElement).value);
    if (value >= this.debtInfo.minimumPayment && value <= this.maxPayment) {
      this.installmentAmount = value;
      this.calculateMonths();
    }
  }

  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('nl-NL', options);
  }

  renderMonthCircles(): number[] {
    const displayMonths = this.months > 24 ? 24 : this.months;
    return Array.from({ length: displayMonths }, (_, index) => index + 1);
  }

  confirmPaymentPlan(): void {
    console.log('Payment plan confirmed', { installmentAmount: this.installmentAmount, months: this.months });
  }

}
