import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-debtor-company-registration',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    NgIf,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './debtor-company-registration.component.html',
  styleUrl: './debtor-company-registration.component.css'
})
export class DebtorCompanyRegistrationComponent implements OnInit{
  countries:string[]= ['Nederland', 'België', 'Duitsland']
  constructor( private router: Router) {

  }

  ngOnInit():void{
    this.countries = ['Nederland', 'België', 'Duitsland'];
}
  isCountryInvalid = false;

  formData:any = {
    companyName: ['Voorbeeld BV', Validators.required],
    vatNumber: ['NL123456789B01', Validators.required],
    addressCompany: ['Plezantstraat 123', Validators.required],
    postalCodeCompany: ['1234 AB', Validators.required],
    cityCompany: ['Amsterdam', Validators.required],
    country: ['Nederland'],
    lastName: 'Jan',
    firstName: 'Jansens',
    email: 'Jan@hotmail.com',
    mobileNumber: '0488004222',
    address: 'plezantstraat',
    houseNumber: '15',
    postalCode: '9100',
    city: 'Sint-Niklaas',
    consentToTerms: true,
  };

  linksClicked:any = {
    terms: false,
    privacy: false,
  };

  onCountryChange(value: string) {
    this.isCountryInvalid = !value;
  }
  handleInputChange(event: Event, key: string) {
    const target = event.target as HTMLInputElement;
    this.formData[key] = target.type === 'checkbox' ? target.checked : target.value;
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
    this.router.navigate(['debtor-welcome']);
  }

}



