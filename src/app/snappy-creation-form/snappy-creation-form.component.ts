import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {SnappyPreviewComponent} from "../snappy-preview/snappy-preview.component";

interface Invoice {
  id: number;
  number: string;
  amount: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-snappy-creation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SnappyPreviewComponent, FormsModule],
  templateUrl: './snappy-creation-form.component.html',
  styleUrls: ['./snappy-creation-form.component.css']
})
export class SnappyCreationFormComponent implements OnInit {
  form!: FormGroup;
  useInvoiceGrid = false;
  totalAmount = '0.00';
  defaultMonths = 12;
  currency = 'EUR';
  showPreview = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      debtorData: this.fb.group({
        name: ['', Validators.required],
        mobileNumber: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      }),
      snappySettings: this.fb.group({
        minAmount: [50, Validators.required],
        maxMonths: [12, Validators.required],
        interestRate: [5, Validators.required]
      }),
      invoices: this.fb.array([this.createInvoiceFormGroup()])
    });

    this.form.get('snappySettings.maxMonths')?.valueChanges.subscribe(value => {
      this.defaultMonths = value;
    });
  }

  createInvoiceFormGroup(): FormGroup {
    return this.fb.group({
      id: [Date.now()],
      number: [''],
      amount: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  get invoicesFormArray(): FormArray {
    return this.form.get('invoices') as FormArray;
  }

  addInvoiceLine() {
    this.invoicesFormArray.push(this.createInvoiceFormGroup());
  }

  removeInvoiceLine(index: number) {
    this.invoicesFormArray.removeAt(index);
  }

  updateTotalAmount() {
    const invoices = this.invoicesFormArray.value;
    this.totalAmount = invoices.reduce((sum: number, invoice: Invoice) => sum + (parseFloat(invoice.amount) || 0), 0).toFixed(2);
  }

  calculateMonthsBetween(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    return years * 12 + months;
  }

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const snappyData = {
        debtorData: formValue.debtorData,
        invoices: this.useInvoiceGrid ? formValue.invoices.map((invoice: Invoice) => ({
          ...invoice,
          months: this.calculateMonthsBetween(invoice.startDate, invoice.endDate)
        })) : [],
        totalAmount: parseFloat(this.totalAmount),
        currency: this.currency,
        settings: formValue.snappySettings,
        defaultMonths: this.defaultMonths
      };
      console.log('Submitting Snappy:', snappyData);
      // Send the data to the backend here
    }
  }

  togglePreview() {
    this.showPreview = !this.showPreview;
  }

  protected readonly parseFloat = parseFloat;
}
