import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from '../../services/auth-service';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.authService.login(this.username);
      this.router.navigate(['/supplier-dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  navigateToDashboard():void{
    this.router.navigate(['supplier-dashboard']);
  }

}
