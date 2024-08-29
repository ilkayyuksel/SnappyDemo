import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-payment-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './payment-table.component.html',
  styleUrl: './payment-table.component.css'
})
export class PaymentTableComponent {

  @Input() payments: any[] = [];
  @Input() title: string = '';
  @Input() isExecuted: boolean = false;

  formatCurrency(amount: number): string {
    return amount.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' });

  }

  formatDateEU(date: Date): string {
    return date.toLocaleDateString('nl-NL', { day: '2-digit', month: '2-digit', year: 'numeric' });

  }
}
