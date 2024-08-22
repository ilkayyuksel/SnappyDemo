import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snappy-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snappy-preview.component.html',
  styleUrls: ['./snappy-preview.component.css']
})
export class SnappyPreviewComponent {
  @Input() totalAmount: number = 0;
  @Input() settings: any = {};
  @Input() defaultMonths: number = 12;
  @Input() invoices: any[] = [];
  @Output() close = new EventEmitter<void>();

  calculateMonthlyPayment(): number {
    const principal = this.totalAmount;
    const interestRate = this.settings.interestRate / 100 / 12; // monthly interest rate
    const numberOfPayments = this.defaultMonths;

    const monthlyPayment = (principal * interestRate * Math.pow(1 + interestRate, numberOfPayments)) /
      (Math.pow(1 + interestRate, numberOfPayments) - 1);

    return Math.round(monthlyPayment * 100) / 100; // Round to 2 decimal places
  }

  onClose(): void {
    this.close.emit();
  }
}
