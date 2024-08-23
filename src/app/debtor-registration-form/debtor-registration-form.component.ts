import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

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

  constructor( private router: Router) {}

  formData:any = {
    lastName: 'Jan',
    firstName: 'Jansens',
    email: 'Jan@hotmail.com',
    mobileNumber: '0488004222',
    address: 'voorbeeldstraat',
    houseNumber: '15',
    postalCode: '9100',
    city: 'Sint-Niklaas',
    consentToTerms: true,
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
  navigateToWelcomePage():void{
    this.router.navigate(['snappy-adjust']);
  }

}



