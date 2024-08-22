import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-debtor-registration-form',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    NgIf
  ],
  templateUrl: './debtor-registration-form.component.html',
  styleUrl: './debtor-registration-form.component.css'
})
export class DebtorRegistrationFormComponent {

  formData:any = {
    lastName: '',
    firstName: '',
    email: '',
    mobileNumber: '',
    address: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    consentToTerms: false,
  };

  linksClicked:any = {
    terms: false,
    privacy: false,
  };

  handleInputChange(event: Event, key: string) {
    const target = event.target as HTMLInputElement;
    this.formData[key] = target.type === 'checkbox' ? target.checked : target.value;
  }

  handleLinkClick(linkType: string) {
    this.linksClicked[linkType] = true;
    console.log(`${linkType} link clicked`);
  }

  get canAgree(): boolean {
    return this.linksClicked.terms && this.linksClicked.privacy;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    if (!this.canAgree) {
      alert('You must read the terms and privacy policy before registering.');
      return;
    }
    console.log('Form submitted:', this.formData);
    // Send the form data to the backend here
  }
}



