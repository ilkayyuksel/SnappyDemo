import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {NgClass} from "@angular/common";
import {AuthService} from "../../../main/services/auth-service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  isLoggedIn: boolean = false;
  username: string = '';
  private subscriptions: Subscription = new Subscription();

  navigateToNewPage() {
    if (!this.isLoggedIn) {
      this.router.navigate(['login'])
    }
  }
  ngOnInit() {
    this.subscriptions.add(
      this.authService.isLoggedIn$.subscribe(
        isLoggedIn => this.isLoggedIn = isLoggedIn
      )
    );
    this.subscriptions.add(
      this.authService.username$.subscribe(
        username => this.username = username
      )
    );
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
