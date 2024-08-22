import {Component, EventEmitter, Output, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
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
  selector: 'app-advancedfilters',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './advancedfilters.component.html',
  styleUrl: './advancedfilters.component.css'
})
export class AdvancedfiltersComponent {
  @Input() filters!: FilterConfig;
  @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() applyFilters: EventEmitter<void> = new EventEmitter<void>();

  handleFilterChange(event: any) {
    this.filterChange.emit({ ...this.filters, [event.target.name]: event.target.value });
  }

  triggerApplyFilters() {
    this.applyFilters.emit();
  }
}
