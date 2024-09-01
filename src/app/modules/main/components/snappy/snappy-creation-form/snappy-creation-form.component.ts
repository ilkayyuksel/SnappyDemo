import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {SnappyPreviewComponent} from "../snappy-preview/snappy-preview.component";
import {Router} from "@angular/router";
import {SnappyService} from "../../../services/snappy-preview-service";

interface Invoice {
  number: string;
  amount: string;
}

@Component({
  selector: 'app-snappy-creation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SnappyPreviewComponent, FormsModule],
  templateUrl: './snappy-creation-form.component.html',
  styleUrls: ['./snappy-creation-form.component.css']
})
export class SnappyCreationFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private snappyService: SnappyService) {}
  name: string=''
  mobileNumber:string=''
  email:string=''
  useInvoiceGrid: boolean = false;

  totalAmount: number = 0;

  minAmount: number = 50;

  numberOfMonths: number = 12;

  interestRate: number = 5;

  startDate?: Date;
  formattedStartDate?: string;

  invoices: Invoice[] = [{ number: '', amount: '' }];

  focusedField: string | null = null;



  ngOnInit() {

    this.updateStartDate();

  }



  updateStartDate() {

    const currentDate = new Date();

    let nextMonth = currentDate.getMonth() + 2; // +2 because months are 0-indexed

    let year = currentDate.getFullYear();



    if (nextMonth > 12) {

      nextMonth = 1;

      year += 1;

    }



    const startDate = new Date(year, nextMonth - 1, 7);

    this.startDate = new Date(startDate);
    this.formattedStartDate = this.formatDate(this.startDate);

  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  onDateChange(dateString: string) {
    this.startDate = new Date(dateString);
    this.formattedStartDate = dateString;
  }


  calculatePaymentPlan(): void {

    let calculatedMinAmount: number=0;
    let calculatedMonths: number=0;

    const calculateForZeroInterest = (): void => {
      calculatedMonths = Math.min(12, Math.ceil(this.totalAmount / this.minAmount));
      calculatedMinAmount = Math.ceil(this.totalAmount / calculatedMonths / 5) * 5;

      if (calculatedMinAmount < 50) {
        calculatedMinAmount = 50;
        calculatedMonths = Math.min(12, Math.ceil(this.totalAmount / calculatedMinAmount));
      }
    };

    const calculateWithInterest = (): void => {
      const r: number = this.interestRate / 100 / 12;
      calculatedMonths = 12;  // Start with maximum months

      const calculateAmount = (): number => {
        const numerator: number = r * Math.pow(1 + r, calculatedMonths);
        const denominator: number = Math.pow(1 + r, calculatedMonths) - 1;
        return this.totalAmount * (numerator / denominator);
      };

      calculatedMinAmount = Math.ceil(calculateAmount() / 5) * 5;

      if (calculatedMinAmount < 50) {
        calculatedMinAmount = 50;
        calculatedMonths = Math.ceil(Math.log(calculatedMinAmount / (calculatedMinAmount - this.totalAmount * r)) / Math.log(1 + r));
        calculatedMonths = Math.min(12, Math.max(2, calculatedMonths));
      }
    };

    if (this.interestRate === 0) {
      calculateForZeroInterest();
    } else {
      calculateWithInterest();
    }

    this.minAmount = Math.max(50, calculatedMinAmount);
    this.numberOfMonths = Math.min(12, Math.max(2, calculatedMonths));
  }

  adjustPaymentOnMonthsChange(): void {
    // Zorg ervoor dat het aantal maanden niet minder dan 2 is
    this.numberOfMonths = Math.max(2, this.numberOfMonths);

    if (this.interestRate === 0) {
      // Zonder rente is de berekening eenvoudig
      this.minAmount = Math.ceil(this.totalAmount / this.numberOfMonths / 5) * 5;
    } else {
      // Met rente gebruiken we de annuïteitenformule
      const r: number = this.interestRate / 100 / 12;
      const numerator: number = r * Math.pow(1 + r, this.numberOfMonths);
      const denominator: number = Math.pow(1 + r, this.numberOfMonths) - 1;
      this.minAmount = Math.ceil((this.totalAmount * (numerator / denominator)) / 5) * 5;
    }

    // Zorg ervoor dat de maandelijkse betaling niet minder dan 50 is
    this.minAmount = Math.max(50, this.minAmount);

    // Als de maandelijkse betaling 50 is en dit niet voldoende is om de lening af te betalen,
    // pas dan het aantal maanden aan
    if (this.minAmount === 50 && this.numberOfMonths * 50 < this.totalAmount) {
      this.recalculateNumberOfMonths();
    }
  }

  private recalculateNumberOfMonths(): void {
    if (this.interestRate === 0) {
      this.numberOfMonths = Math.ceil(this.totalAmount / this.minAmount);
    } else {
      const r: number = this.interestRate / 100 / 12;
      this.numberOfMonths = Math.ceil(
        Math.log(this.minAmount / (this.minAmount - this.totalAmount * r)) / Math.log(1 + r)
      );
    }
  }

  updateNumberOfMonths(): void {
    // Zorg ervoor dat de maandelijkse betaling minstens 50 is
    this.minAmount = Math.max(50, this.minAmount);

    if (this.interestRate === 0) {
      // Zonder rente
      this.numberOfMonths = Math.ceil(this.totalAmount / this.minAmount);
    } else {
      // Met rente
      const r = this.interestRate / 100 / 12;
      const numerator = Math.log(this.minAmount) - Math.log(this.minAmount - this.totalAmount * r);
      const denominator = Math.log(1 + r);
      this.numberOfMonths = Math.ceil(numerator / denominator);
    }

    // Rond het aantal maanden naar boven af naar het dichtstbijzijnde gehele getal
    this.numberOfMonths = Math.ceil(this.numberOfMonths);

    console.log(`Updated: Monthly Payment = ${this.minAmount}, Number of Months = ${this.numberOfMonths}`);
  }

  calculateOnInterestRateChange(): void {

    const currentMonthlyPayment = this.minAmount;
    const currentTotalAmount = this.totalAmount;
    // Update de rentevoet
    const newInterestRate= this.interestRate;

    // Bereken het nieuwe aantal maanden
    if (newInterestRate === 0) {
      // Als de nieuwe rentevoet 0 is, is het simpelweg totaalbedrag gedeeld door maandelijkse betaling
      this.numberOfMonths = Math.ceil(currentTotalAmount / currentMonthlyPayment);
    } else {
      const monthlyRate = newInterestRate / 100 / 12;

      // Gebruik de formule voor aantal termijnen bij een annuïteitenlening
      this.numberOfMonths = Math.ceil(
        Math.log(currentMonthlyPayment / (currentMonthlyPayment - currentTotalAmount * monthlyRate)) /
        Math.log(1 + monthlyRate)
      );

    }

    // Rond het aantal maanden naar boven af naar het dichtstbijzijnde gehele getal
    this.numberOfMonths = Math.ceil(this.numberOfMonths);



    // Herbereken het totaalbedrag om eventuele afrondingsverschillen te corrigeren
    if (this.interestRate === 0) {
      this.totalAmount = this.minAmount * this.numberOfMonths;
    } else {
      const monthlyRate = this.interestRate / 100 / 12;
      this.totalAmount = this.minAmount * ((1 - Math.pow(1 + monthlyRate, -this.numberOfMonths)) / monthlyRate);
    }
    this.totalAmount=currentTotalAmount
  }



  onFocus(field: string) {

    this.focusedField = field;

  }



  onBlur() {

    if (this.focusedField === 'interestRate') {

      this.calculateOnInterestRateChange();

    } else if (this.focusedField === 'minAmount') {

      this.updateNumberOfMonths();

    } else if (this.focusedField === 'numberOfMonths') {

      this.adjustPaymentOnMonthsChange();

    } else if (this.focusedField === 'totalAmount') {

      this.calculatePaymentPlan();

    } else {

      this.calculatePaymentPlan();

    }

    this.focusedField = null;

  }



  handleMinAmountChange(value: number) {

    this.minAmount = Math.max(5, Math.round(value / 5) * 5);

  }



  handleInterestRateChange(value: number) {

    this.interestRate = Math.max(0, Math.round(value * 2) / 2);

  }



  handleNumberOfMonthsChange(value: number) {

    this.numberOfMonths = Math.max(2, parseInt(value.toString()));

  }



  toggleInvoiceGrid() {

    this.useInvoiceGrid = !this.useInvoiceGrid;

    if (this.useInvoiceGrid) {

      this.totalAmount = 0;

      this.invoices = [{ number: '', amount: '' }];

    }

  }



  handleInvoiceChange(index: number, field: 'number' | 'amount', value: string) {

    if (field === 'amount') {

      this.invoices[index][field] = String(parseFloat(value) || 0);

    } else {

      this.invoices[index][field] = value;

    }

    this.updateTotalAmount();

  }



  addInvoice() {

    this.invoices.push({ number: '', amount: '' });

  }



  removeInvoice(index: number) {

    this.invoices.splice(index, 1);

    this.updateTotalAmount();

  }



  updateTotalAmount() {

    this.totalAmount = Number(this.invoices.reduce((sum, invoice) => sum + Number(invoice.amount), 0));

  }



  onKeyDown(event: KeyboardEvent, index: number, field: 'number' | 'amount') {

    if (event.key === 'Enter' || event.key === 'Tab') {

      event.preventDefault();

      if (field === 'number') {

        // Focus the amount input of the same row

        (document.getElementById(`amount-${index}`) as HTMLInputElement)?.focus();

      } else if (field === 'amount') {

        if (index === this.invoices.length - 1) {

          this.addInvoice();

          setTimeout(() => {

            (document.getElementById(`number-${index + 1}`) as HTMLInputElement)?.focus();

          }, 0);

        } else {

          // Focus the number input of the next row

          (document.getElementById(`number-${index + 1}`) as HTMLInputElement)?.focus();

        }

      }

    }

  }

  protected readonly parseFloat = parseFloat;

  onSubmit() {
      console.log('Submitting Snappy');
      // Send the data to the backend here
    }


  goToDebtor():void{
    this.router.navigate(["debtor-onboarding"])
  }

  navigateToDashboard():void{
    this.router.navigate(["supplier-dashboard"])
  }



  togglePreview() {
    this.snappyService.updateParams({
      totalAmount: this.totalAmount,
      interestRate: this.interestRate,
      numberOfMonths: this.numberOfMonths, minimumPayment :this.minAmount, date: this.startDate
    });
    this.router.navigate(["snappy-preview"])
  }
}
