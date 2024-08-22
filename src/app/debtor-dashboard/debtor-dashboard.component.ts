import { Component } from '@angular/core';
import {UpcomingPaymentsComponent} from "../upcoming-payments/upcoming-payments.component";
import {PaymentSummaryComponent} from "../payment-summary/payment-summary.component";

@Component({
  selector: 'app-debtor-dashboard',
  standalone: true,
  imports: [
    UpcomingPaymentsComponent,
    PaymentSummaryComponent
  ],
  templateUrl: './debtor-dashboard.component.html',
  styleUrl: './debtor-dashboard.component.css'
})
export class DebtorDashboardComponent {

  // Sample data for payments

  samplePayments = [

    {

      id: 'PAY001',

      date: '2024-09-15',

      creditorName: 'ABC Utilities',

      amount: 150.00,

      currency: 'EUR'

    },

    {

      id: 'PAY002',

      date: '2024-09-20',

      creditorName: 'XYZ Insurance',

      amount: 75.50,

      currency: 'EUR'

    },

    {

      id: 'PAY003',

      date: '2024-10-01',

      creditorName: 'City Tax Office',

      amount: 250.00,

      currency: 'EUR'

    }

  ];



  paymentSummary = {

    totalDue: 475.50,

    totalPaid: 200.00,

    remainingBalance: 275.50

  };

}
