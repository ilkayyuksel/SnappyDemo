import { Component } from '@angular/core';
import {ActioncardComponent} from "./actioncard/actioncard.component";
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {AdvancedfiltersComponent} from "./advancedfilters/advancedfilters.component";
import {InfocardComponent} from "./infocard/infocard.component";
import {sortData} from "../utils/sortData";
import {MatIcon} from "@angular/material/icon";
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';
import {AuthService} from "../utils/auth-service";
import {Router} from "@angular/router";



interface PaymentPlan {
  id: number;
  reference: string;
  debtor: string;
  amount: number;
  date: string;
  status: string;
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
@Component({
  selector: 'app-supplier-dashboard',
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
  paymentPlans:  PaymentPlan[]= [
    { id: 1, reference: 'REF001', debtor: 'Alice Johnson', amount: 1000, date: '2023-07-15', status: 'Pending' },
    { id: 2, reference: 'REF002', debtor: 'Bob Smith', amount: 750, date: '2023-07-10', status: 'Modified' },
    { id: 3, reference: 'REF003', debtor: 'Carol Williams', amount: 1200, date: '2023-07-20', status: 'Confirmed' },
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


  chartData: any[] = [
    {
      name: 'Collected',
      series: [
        { name: 'Jan', value: 4000 },
        { name: 'Feb', value: 3000 },
        { name: 'Mar', value: 2000 },
        { name: 'Apr', value: 2780 },
        { name: 'May', value: 1890 },
        { name: 'Jun', value: 2390 }
      ]
    },
    {
      name: 'Outstanding',
      series: [
        { name: 'Jan', value: 2400 },
        { name: 'Feb', value: 1398 },
        { name: 'Mar', value: 9800 },
        { name: 'Apr', value: 3908 },
        { name: 'May', value: 4800 },
        { name: 'Jun', value: 3800 }
      ]
    }
  ];

  view: [number, number] = [700, 300];

  colorScheme: Color = {
    domain: ['#4CAF50', '#FFA000'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'customScheme'
  };

  sortConfig = { key: 'debtor', direction: 'ascending' };
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

  handlePaymentChange(id: number, field: string, value: any) {
    this.paymentPlans = this.paymentPlans.map(plan =>
      plan.id === id ? { ...plan, [field]: value, status: 'Modified' } : plan
    );
  }

  handleProcessPayment(id: number) {
    console.log(`Processing payment for plan ID: ${id}`);
    this.paymentPlans = this.paymentPlans.filter(plan => plan.id !== id);
  }

  createNewSnappy() {
    this.router.navigate(['snappy-creation'])
  }

  generateReport() {
    alert('Generate Report action triggered');
  }

  openSettings() {
    alert('Settings action triggered');
  }


}
