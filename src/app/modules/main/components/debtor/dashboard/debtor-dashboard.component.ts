import { Component } from '@angular/core';
import {UpcomingPaymentsComponent} from "../../payment/upcoming-payments/upcoming-payments.component";
import {PaymentSummaryComponent} from "../../payment/summary/payment-summary.component";
import {Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface Payment {
  id: string;
  date: string;
  creditorName: string;
  amount: number;
  currency: string;
  isOverdue: boolean;
  contactInfo: ContactInfo;
}

interface PaymentSummary {
  totalDue: number;
  totalPaid: number;
  remainingBalance: number;
  overdueAmount: number;
}

@Component({
  selector: 'app-debtor-dashboard',
  standalone: true,
  imports: [
    UpcomingPaymentsComponent,
    PaymentSummaryComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './debtor-dashboard.component.html',
  styleUrl: './debtor-dashboard.component.css'
})
export class DebtorDashboardComponent {

  // Sample data for payments
  constructor( private router: Router) {}

  navigateToSupplierDashboard():void{
    this.router.navigate(["supplier-dashboard"])
}

  selectedContact: ContactInfo | null = null;



  samplePayments: Payment[] = [

    {

      id: 'PAY001',

      date: '01/09/2024',

      creditorName: 'ABC Utilities',

      amount: 150.00,

      currency: 'EUR',

      isOverdue: true,

      contactInfo: {

        name: 'ABC Utilities',

        email: 'support@abcutilities.com',

        phone: '+31 20 123 4567',

        address: '123 Utility St, Amsterdam, Netherlands'

      }

    },

    {

      id: 'PAY002',

      date: '20/09/2024',

      creditorName: 'XYZ Insurance',

      amount: 75.50,

      currency: 'EUR',

      isOverdue: false,

      contactInfo: {

        name: 'XYZ Insurance',

        email: 'info@xyzinsurance.com',

        phone: '+31 10 987 6543',

        address: '456 Insurance Ave, Rotterdam, Netherlands'

      }

    },

    {

      id: 'PAY003',

      date: '01/10/2024',

      creditorName: 'City Tax Office',

      amount: 250.00,

      currency: 'EUR',

      isOverdue: false,

      contactInfo: {

        name: 'City Tax Office',

        email: 'tax@citygov.nl',

        phone: '+31 30 555 1234',

        address: '789 Government Blvd, Utrecht, Netherlands'

      }

    }

  ];



  paymentSummary: PaymentSummary = {

    totalDue: 475.50,

    totalPaid: 200.00,

    remainingBalance: 275.50,

    overdueAmount: 150.00

  };



  setSelectedContact(contactInfo: ContactInfo | null): void {

    this.selectedContact = contactInfo;

  }



  getOverduePayments(): Payment[] {

    return this.samplePayments.filter(p => p.isOverdue);

  }



  getUpcomingPayments(): Payment[] {

    return this.samplePayments.filter(p => !p.isOverdue);

  }

}
