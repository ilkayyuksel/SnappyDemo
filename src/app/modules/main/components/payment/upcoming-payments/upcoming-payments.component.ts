import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-upcoming-payments',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './upcoming-payments.component.html',
  styleUrl: './upcoming-payments.component.css'
})
export class UpcomingPaymentsComponent {

  @Input() payments: any[] = [];

  formatDate(dateString: string): string {

    const date = new Date(dateString);

    return date.toLocaleDateString('en-GB', {

      day: '2-digit',

      month: '2-digit',

      year: 'numeric'

    });

  }

}
