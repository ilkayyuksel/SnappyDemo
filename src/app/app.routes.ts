import { Routes } from '@angular/router';
import {SupplierDashboardComponent} from "./supplier-dashboard/supplier-dashboard.component";
import {SupplierRegistrationFormComponent} from "./supplier-registration-form/supplier-registration-form.component";
import {SignUpPageComponent} from "./sign-up-page/sign-up-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {DebtorRegistrationFormComponent} from "./debtor-registration-form/debtor-registration-form.component";
import {SupplierWelcomePageComponent} from "./supplier-welcome-page/supplier-welcome-page.component";

export const routes: Routes = [
  { path: '', component:  LandingPageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'supplier-onboarding', component: SupplierRegistrationFormComponent },
  { path: 'supplier-dashboard', component: SupplierDashboardComponent },
  { path: 'debtor-onboarding', component: DebtorRegistrationFormComponent },
  { path: 'supplier-welcome', component: SupplierWelcomePageComponent }
];

