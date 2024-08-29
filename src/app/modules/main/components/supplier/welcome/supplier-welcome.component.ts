import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {UntypedFormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth-service";

@Component({
  selector: 'app-supplier-welcome',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './supplier-welcome.component.html',
  styleUrl: './supplier-welcome.component.css'
})
export class SupplierWelcomeComponent {

  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
    // ... other initializations ...
    // For demonstration, let's log in the user
    this.authService.login('admin');
  }
  termsRead = true;
  privacyRead = true;
  termsAgreed = false;
  privacyAgreed = false;
  showTermsWarning = false;
  showPrivacyWarning = false;


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
    this.router.navigate(['supplier-dashboard']);

  }

  onComplete() {
    // You can replace this with any logic you'd like to perform upon completion.
    console.log("Continuing to the dashboard...");
  }


}
