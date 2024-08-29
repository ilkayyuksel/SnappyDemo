import { Component } from '@angular/core';
import {RoleSelectionComponent} from "./role-selection/role-selection.component";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [

    RoleSelectionComponent
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
