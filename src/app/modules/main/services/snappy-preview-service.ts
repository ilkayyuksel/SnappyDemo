import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface SnappyParams {
  totalAmount: number;
  interestRate: number;
  numberOfMonths: number;
  minimumPayment: number;
  date: Date
}

@Injectable({
  providedIn: 'root'
})
export class SnappyService {
  private paramsSource = new BehaviorSubject<SnappyParams>({
    totalAmount: 0,
    interestRate: 0,
    numberOfMonths: 0, minimumPayment:0, date:new Date()
  });
  currentParams:Observable<SnappyParams> = this.paramsSource.asObservable();

  updateParams(params: Partial<SnappyParams>) {
    this.paramsSource.next({ ...this.paramsSource.value, ...params });
  }

  getParams(): SnappyParams {
    return this.paramsSource.value;
  }
}
