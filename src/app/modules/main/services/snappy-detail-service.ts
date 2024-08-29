import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',

})

export class SnappyDetailsService {

  constructor() {}



  addMonths(date: Date, months: number): Date {

    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate;

  }



  calculatePaymentPlan(totalDebt: number, monthlyPayment: number, interestRate: number, numberOfMonths: number, agreementDate: Date): any {

    let balance = totalDebt;
    let currentDate = new Date(agreementDate);

    const allPayments = [{
      reference: 'Start',
      date: currentDate,
      payment: 0,
      capital: 0,
      interest: 0,
      balance: balance
    }];


    for (let i = 1; i <= numberOfMonths; i++) {

      currentDate = this.addMonths(agreementDate, i);
      currentDate.setDate(7); // Payment on the 7th of each month

      const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
      const interestAmount = (balance * (interestRate / 100) / 365) * daysInMonth;
      let capitalAmount = monthlyPayment - interestAmount;
      let payment = monthlyPayment;

      if (balance + interestAmount <= monthlyPayment) {
        payment = balance + interestAmount;
        capitalAmount = balance;
        balance = 0;
      } else {
        balance -= capitalAmount;
      }

      allPayments.push({

        reference: i <= 4 ? `REF${String(i).padStart(3, '0')}` : '',
        date: currentDate,
        payment: payment,
        capital: capitalAmount,
        interest: interestAmount,
        balance: balance
      });

      if (balance === 0) break;
    }
    allPayments.reverse();

    return {
      executedPayments: allPayments.slice(allPayments.length - 1,allPayments.length),
      remainingPayments: allPayments.map((payment, index) => ({
        ...payment,
        number: allPayments.length - index - 1
      })),
    };
  }
}
