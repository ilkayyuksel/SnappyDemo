import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth-service";
import {MatIcon} from "@angular/material/icon";
import {interval, map, Subscription, take} from "rxjs";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-debtor-welcome',
  standalone: true,
  imports: [
    NgIf, MatIcon, NgClass, FormsModule
  ],
  templateUrl: './debtor-welcome.component.html',
  styleUrl: './debtor-welcome.component.css'
})
export class DebtorWelcomeComponent {

  constructor(private router:Router) {
  }

  showMoreInfo: boolean = false;
  @Input() debtorName: string = "Valued Customer";
  @Input() creditorName: string = "Our Company";
  @Input() debtAmount: number | null = null;

  timeLeft: string = '';
  agreedToTerms: boolean = false;
  private timerSubscription: Subscription | null = null;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  startTimer() {
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now

    this.timerSubscription = interval(1000)
      .pipe(
        take(24 * 60 * 60),
        map(() => {
          const now = new Date().getTime();
          const distance = endTime - now;
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return `${hours}h ${minutes}m ${seconds}s`;
        })
      )
      .subscribe(
        time => this.timeLeft = time,
        null,
        () => this.timeLeft = 'EXPIRED'
      );
  }

  onContinue() {
    if (this.agreedToTerms) {
      console.log("User agreed and wants to continue");
      this.router.navigate(['snappy-adjust']);
    }
  }

  get formattedDebtAmount(): string {
    return this.debtAmount !== null ? this.debtAmount.toFixed(2) : 'N/A';
  }


}
