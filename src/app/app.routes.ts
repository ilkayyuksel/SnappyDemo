import { Routes } from '@angular/router';
import {SupplierDashboardComponent} from "./modules/main/components/supplier/dashboard/supplier-dashboard.component";
import {SupplierRegistrationComponent} from "./modules/main/components/supplier/registration/supplier-registration.component";
import {SignUpComponent} from "./modules/main/components/sign-up/sign-up.component";

import {LandingComponent} from "./modules/main/components/landing-page/landing.component";
import {DebtorRegistrationComponent} from "./modules/main/components/debtor/registration/debtor-registration.component";
import {DebtorDashboardComponent} from "./modules/main/components/debtor/dashboard/debtor-dashboard.component";
import {DebtorWelcomeComponent} from "./modules/main/components/debtor/welcome/debtor-welcome.component";
import {LoginComponent} from "./modules/main/components/login/login.component";
import {SnappyCreationFormComponent} from "./modules/main/components/snappy/snappy-creation-form/snappy-creation-form.component";
import {SnappyPaymentPlanPreviewComponent} from "./modules/main/components/snappy/snappy-payment-plan-preview/snappy-payment-plan-preview.component";
import {SupplierWelcomeComponent} from "./modules/main/components/supplier/welcome/supplier-welcome.component";
import {SnappyPreviewComponent} from "./modules/main/components/snappy/snappy-preview/snappy-preview.component";
import {SupplierSettingsComponent} from "./modules/main/components/supplier/settings/supplier-settings.component";

export const routes: Routes = [
  { path: '', component:  LandingComponent},
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'supplier-onboarding', component: SupplierRegistrationComponent },
  { path: 'debtor-dashboard', component: DebtorDashboardComponent },
  { path: 'debtor-onboarding', component: DebtorRegistrationComponent },
  { path: 'supplier-welcome', component: SupplierWelcomeComponent },
  { path: 'debtor-welcome', component: DebtorWelcomeComponent },
  { path: 'supplier-dashboard', component: SupplierDashboardComponent },
  { path: 'snappy-creation', component: SnappyCreationFormComponent },
  { path: 'snappy-adjust', component: SnappyPaymentPlanPreviewComponent },
  { path: 'snappy-preview', component: SnappyPreviewComponent },
  { path: 'supplier-settings', component: SupplierSettingsComponent }
];

