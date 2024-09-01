import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SnappyDetailsService} from "../../../services/snappy-detail-service";
import {PaymentTableComponent} from "../payment-table/payment-table.component";
import {SnappyParams, SnappyService} from "../../../services/snappy-preview-service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-snappy-preview',
  standalone: true,
  imports: [CommonModule, PaymentTableComponent],
  templateUrl: './snappy-preview.component.html',
  styleUrls: ['./snappy-preview.component.css']
})
export class SnappyPreviewComponent {
  params: SnappyParams = {
    totalAmount: 0,
    interestRate: 0,
    numberOfMonths: 0,
    minimumPayment:0,
    date: new Date()
  };

  supplierName = 'Test Supplier';
  totalDebt = 0
  monthlyPayment = 0
  interestRate = 0
  numberOfMonths = 0
  agreementDate = new Date();
  executedPayments = [];
  remainingPayments = [];
  formattedDate: string= ""

  private subscription: Subscription = new Subscription();

  constructor(private snappyDetailsService: SnappyDetailsService, private snappyService: SnappyService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.snappyService.currentParams.subscribe(params => {
      this.params = params;
    });
    this.totalDebt = this.params.totalAmount.valueOf()
    this.monthlyPayment = this.params.minimumPayment.valueOf();
    this.interestRate = this.params.interestRate.valueOf()
    this.numberOfMonths = this.params.numberOfMonths.valueOf()
    this.agreementDate= this.params.date
    this.formattedDate = this.formatDate(this.params.date)
    this.calculatePaymentPlan();
  }

  formatCurrency(amount: number): string {
    return amount.toLocaleString('nl-NL', {style: 'currency', currency: 'EUR'});
  }

  formatDateEU(date: Date): string {
    return date.toLocaleDateString('nl-NL', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  navigateToSnappy():void{
    this.router.navigate(["snappy-creation"])
  }



  calculatePaymentPlan(): void {

    const paymentPlan = this.snappyDetailsService.calculatePaymentPlan(this.totalDebt, this.monthlyPayment,
      this.interestRate, this.numberOfMonths, this.agreementDate);
    this.executedPayments = paymentPlan.executedPayments;
    this.remainingPayments = paymentPlan.remainingPayments;
  }

}
