import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private usernameSubject = new BehaviorSubject<string>('');

  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  username$: Observable<string> = this.usernameSubject.asObservable();

  login(username: string): void {
    this.isLoggedInSubject.next(true);
    this.usernameSubject.next(username);
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
    this.usernameSubject.next('');
  }
}
