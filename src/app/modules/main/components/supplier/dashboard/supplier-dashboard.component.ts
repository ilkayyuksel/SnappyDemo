import { Component } from '@angular/core';
import {ActioncardComponent} from "./actioncard/actioncard.component";
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {AdvancedfiltersComponent} from "./advancedfilters/advancedfilters.component";
import {InfocardComponent} from "./infocard/infocard.component";
import {sortData} from "../../../../../util/sortData";
import {MatIcon} from "@angular/material/icon";
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';
import {AuthService} from "../../../services/auth-service";
import {Router} from "@angular/router";



interface PaymentPlan {
  id: number;
  reference: string;
  debtor: string;
  amount: number;
  date: string;
  status: string;
  originalAmount: number;
  originalDate: string;
}

interface FilterConfig {
  reference: string;
  debtor: string;
  amount: string;
  date: string;
  amountMin: string;
  amountMax: string;
  dateMin: string;
  dateMax: string;
}

type PaymentPlanUpdateField = 'amount' | 'date';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ActioncardComponent,
    FormsModule,
    NgClass,
    AdvancedfiltersComponent,
    NgIf,
    InfocardComponent,
    NgForOf,
    MatIcon,
    NgxChartsModule
  ],
  templateUrl: './supplier-dashboard.component.html',
  styleUrl: './supplier-dashboard.component.css'
})
export class SupplierDashboardComponent {
  paymentPlans: PaymentPlan[] = [
    { id: 1, reference: 'REF001', debtor: 'Alice Johnson', amount: 1000, date: '2023-07-15', status: 'Pending', originalAmount: 1000, originalDate: '2023-07-15' },
    { id: 2, reference: 'REF002', debtor: 'Bob Smith', amount: 750, date: '2023-07-10', status: 'Pending', originalAmount: 750, originalDate: '2023-07-10' },
    { id: 3, reference: 'REF003', debtor: 'Carol Williams', amount: 1500, date: '2023-07-20', status: 'Pending', originalAmount: 1500, originalDate: '2023-07-20' },
    { id: 4, reference: 'REF004', debtor: 'Frank Miller', amount: 100, date: '2023-09-20', status: 'Pending', originalAmount: 100, originalDate: '2023-09-20' },
    { id: 5, reference: 'REF005', debtor: 'Emma Davis', amount: 1900, date: '2023-08-20', status: 'Pending', originalAmount: 1900, originalDate: '2023-08-20' },
    { id: 6, reference: 'REF006', debtor: 'Grace Wilson', amount: 1400, date: '2023-02-20', status: 'Pending', originalAmount: 1400, originalDate: '2023-02-20' },
    { id: 7, reference: 'REF007', debtor: 'Henry Taylor', amount: 1100, date: '2023-01-20', status: 'Pending', originalAmount: 1100, originalDate: '2023-01-20' },
    { id: 8, reference: 'REF008', debtor: 'Ivy Anderson', amount: 2200, date: '2023-03-20', status: 'Pending', originalAmount: 2200, originalDate: '2023-03-20' },
    { id: 9, reference: 'REF009', debtor: 'Jack Thomas', amount: 9200, date: '2023-04-20', status: 'Pending', originalAmount: 9200, originalDate: '2023-04-20' },
    { id: 10, reference: 'REF010', debtor: 'Karen White', amount: 6200, date: '2023-05-20', status: 'Pending', originalAmount: 6200, originalDate: '2023-05-20' },
    { id: 11, reference: 'REF011', debtor: 'Jan Jansens', amount: 3200, date: '2023-08-20', status: 'Pending', originalAmount: 3200, originalDate: '2023-08-20' }
  ];


  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
    // ... other initializations ...
    // For demonstration, let's log in the user
    this.authService.login('admin');
  }

  navigateToLandingspage():void{
    this.authService.logout();
    this.router.navigate(['/']);
  }

  // Method to demonstrate logout
  logout(): void {
    this.authService.logout();
  }


  sortConfig = { key: 'date', direction: 'ascending' };
  filters: FilterConfig = {
    reference: '',
    debtor: '',
    amount: '',
    date: '',
    amountMin: '',
    amountMax: '',
    dateMin: '',
    dateMax: '',
  };
  showAdvancedFilters = false;

  tableHeaders = [
    { key: 'reference', label: 'Reference' },
    { key: 'debtor', label: 'Debtor' },
    { key: 'amount', label: 'Amount' },
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Status' },
    { key: 'action', label: 'Action' },
  ];


  get filteredAndSortedPlans() {
    const filteredPlans = this.paymentPlans.filter(plan =>
      plan.reference.toLowerCase().includes(this.filters.reference.toLowerCase()) &&
      plan.debtor.toLowerCase().includes(this.filters.debtor.toLowerCase()) &&
      plan.amount.toString().includes(this.filters.amount) &&
      plan.date.includes(this.filters.date) &&
      (this.filters.amountMin === '' || plan.amount >= Number(this.filters.amountMin)) &&
      (this.filters.amountMax === '' || plan.amount <= Number(this.filters.amountMax)) &&
      (this.filters.dateMin === '' || plan.date >= this.filters.dateMin) &&
      (this.filters.dateMax === '' || plan.date <= this.filters.dateMax)
    );

    return sortData(filteredPlans, this.sortConfig);
  }

  toggleAdvancedFilters() {
    this.showAdvancedFilters = !this.showAdvancedFilters;
  }

  handleSort(key: string) {
    this.sortConfig = {
      key,
      direction: this.sortConfig.key === key && this.sortConfig.direction === 'ascending' ? 'descending' : 'ascending'
    };
  }

  handleFilterChange(filters: any) {
    this.filters = filters;
  }

  applyFilters() {
    this.showAdvancedFilters = false;
  }

  handlePaymentChange(id: number, field: PaymentPlanUpdateField, value: number | string) {

    this.paymentPlans = this.paymentPlans.map(plan => {
      if (plan.id === id && this.canEditAmountAndDate(plan.status)) {
        let updatedPlan = { ...plan };
        if (field === 'amount' && typeof value === 'number') {
          updatedPlan.amount = value;
        } else if (field === 'date' && typeof value === 'string') {
          updatedPlan.date = value;
        }

        // Check if the updated plan matches the original state
        if (updatedPlan.amount === updatedPlan.originalAmount && updatedPlan.date === updatedPlan.originalDate) {
          updatedPlan.status = 'Pending';
        } else {
          updatedPlan.status = 'Modified';
        }

        return updatedPlan;
      }
      return plan;
    });
  }

  isActionDisabled(status: string): boolean {
    return status === 'Confirmed';
  }

  canEditAmountAndDate(status: string): boolean {
    return status !== 'Confirmed';
  }

  handleProcessPayment(id: number) {
    const planIndex = this.paymentPlans.findIndex(p => p.id === id);
    if (planIndex !== -1) {
      const plan = this.paymentPlans[planIndex];
      if (plan.status === 'Pending') {
        this.paymentPlans[planIndex] = {
          ...plan,
          status: 'Confirmed'
        };
      } else if (plan.status === 'Modified') {
        // Update the status to 'Pending' and set new original values
        this.paymentPlans[planIndex] = {
          ...plan,
          status: 'Pending',
          originalAmount: plan.amount,
          originalDate: plan.date
        };
      }
    }
  }

  createNewSnappy() {
    this.router.navigate(['snappy-creation'])
  }

  generateReport() {
  }

  openSettings() {
    this.router.navigate(['supplier-settings'])
  }

}
