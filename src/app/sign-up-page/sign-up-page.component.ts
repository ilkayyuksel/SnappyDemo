import { Component } from '@angular/core';
import {UserRoleTypeSelectorComponent} from "../user-role-type-selector/user-role-type-selector.component";

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    UserRoleTypeSelectorComponent
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {

}
