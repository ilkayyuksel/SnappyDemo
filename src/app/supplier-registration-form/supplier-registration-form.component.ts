import { Component } from '@angular/core';
import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-supplier-registration-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './supplier-registration-form.component.html',
  styleUrl: './supplier-registration-form.component.css'
})
export class SupplierRegistrationFormComponent {
  supplierForm: UntypedFormGroup= new UntypedFormGroup({});
  countries = ['Nederland', 'België', 'Duitsland'];

  constructor(private fb: UntypedFormBuilder, private router: Router) {}

  ngOnInit() {
    this.supplierForm = this.fb.group({
      companyName: ['', Validators.required],
      vatNumber: ['', Validators.required],
      address: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['Nederland', Validators.required],
      contactName: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', Validators.required],
      iban: ['', Validators.required],
      bankName: ['', Validators.required],
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
