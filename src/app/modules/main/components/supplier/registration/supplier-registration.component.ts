import { Component } from '@angular/core';
import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './supplier-registration.component.html',
  styleUrl: './supplier-registration.component.css'
})
export class SupplierRegistrationComponent {
  supplierForm: UntypedFormGroup= new UntypedFormGroup({});
  countries = ['Nederland', 'België', 'Duitsland'];

  constructor(private fb: UntypedFormBuilder, private router: Router) {}

  ngOnInit() {
    this.supplierForm = this.fb.group({
      companyName: ['Voorbeeld BV', Validators.required],
      vatNumber: ['NL123456789B01', Validators.required],
      address: ['Voorbeeldstraat 123', Validators.required],
      postalCode: ['1234 AB', Validators.required],
      city: ['Amsterdam', Validators.required],
      country: ['Nederland', Validators.required],
      contactName: ['Jan Jansen', Validators.required],
      contactEmail: ['jan.jansen@voorbeeld.nl', [Validators.required, Validators.email]],
      contactPhone: ['06 12345678', Validators.required],
      iban: ['NL91ABNA0417164300', Validators.required],
      bankName: ['ABN AMRO', Validators.required],
      maxTerms: [12, [Validators.required, Validators.min(1), Validators.max(60)]],
      minAmount: [50, [Validators.required, Validators.min(0)]],
      interestRate: [5, [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  onSubmit() {
    if (this.supplierForm.valid) {
      console.log('Form submitted:', this.supplierForm.value);
      // Here you would typically send the data to your backend
    } else {
      this.markFormGroupTouched(this.supplierForm);
    }
  }

  navigateToWelcomePage() {

    this.router.navigate(['supplier-welcome']);
  }

  markFormGroupTouched(formGroup: UntypedFormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof UntypedFormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
