import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {AuthService} from "../utils/auth-service";

@Component({
  selector: 'app-debtor-welcome-page',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './debtor-welcome-page.component.html',
  styleUrl: './debtor-welcome-page.component.css'
})
export class DebtorWelcomePageComponent {
  termsRead = true;
  privacyRead = true;
  termsAgreed = false;
  privacyAgreed = false;
  showTermsWarning = false;
  showPrivacyWarning = false;

  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
    // ... other initializations ...
    // For demonstration, let's log in the user
    this.authService.login('admin');
  }

  handleTermsAgree(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!this.termsRead && target.checked) {
      this.showTermsWarning = true;
      event.preventDefault();
    } else {
      this.termsAgreed = target.checked;
      this.showTermsWarning = false;
    }
  }

  handlePrivacyAgree(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!this.privacyRead && target.checked) {
      this.showPrivacyWarning = true;
      event.preventDefault();
    } else {
      this.privacyAgreed = target.checked;
      this.showPrivacyWarning = false;
    }
  }

  handleContinue() {
    if (this.termsAgreed && this.privacyAgreed) {
      this.onComplete();
    }

    this.router.navigate(['debtor-dashboard']);

  }

  onComplete() {
    // You can replace this with any logic you'd like to perform upon completion.
    console.log("Continuing to the dashboard...");
  }

}
