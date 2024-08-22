import { Routes } from '@angular/router';
import {SupplierDashboardComponent} from "./supplier-dashboard/supplier-dashboard.component";
import {SupplierRegistrationFormComponent} from "./supplier-registration-form/supplier-registration-form.component";
import {SignUpPageComponent} from "./sign-up-page/sign-up-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {DebtorRegistrationFormComponent} from "./debtor-registration-form/debtor-registration-form.component";
import {SupplierWelcomePageComponent} from "./supplier-welcome-page/supplier-welcome-page.component";
import {DebtorDashboardComponent} from "./debtor-dashboard/debtor-dashboard.component";
import {DebtorWelcomePageComponent} from "./debtor-welcome-page/debtor-welcome-page.component";
import {SnappyCreationFormComponent} from "./snappy-creation-form/snappy-creation-form.component";

export const routes: Routes = [
  { path: '', component:  LandingPageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'supplier-onboarding', component: SupplierRegistrationFormComponent },
  { path: 'supplier-dashboard', component: SupplierDashboardComponent },
  { path: 'debtor-onboarding', component: DebtorRegistrationFormComponent },
  { path: 'supplier-welcome', component: SupplierWelcomePageComponent },
  { path: 'debtor-welcome', component: DebtorWelcomePageComponent },
  { path: 'debtor-dashboard', component: DebtorDashboardComponent },
  { path: 'snappy-creation', component: SnappyCreationFormComponent }
];

