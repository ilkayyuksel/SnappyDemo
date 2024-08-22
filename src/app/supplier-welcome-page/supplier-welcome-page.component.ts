import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier-welcome-page',
  standalone: true,
  imports: [],
  templateUrl: './supplier-welcome-page.component.html',
  styleUrl: './supplier-welcome-page.component.css'
})
export class SupplierWelcomePageComponent {

  termsRead = false;
  privacyRead = false;
  termsAgreed = false;
  privacyAgreed = false;
  showTermsWarning = false;
  showPrivacyWarning = false;

  handleTermsClick() {
    window.open('/terms', '_blank');
    this.termsRead = true;
    this.showTermsWarning = false;
  }

  handlePrivacyClick() {
    window.open('/privacy', '_blank');
    this.privacyRead = true;
    this.showPrivacyWarning = false;
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
  }

  onComplete() {
    // You can replace this with any logic you'd like to perform upon completion.
    console.log("Continuing to the dashboard...");
  }


}
