import { Component } from '@angular/core';
import {NgStyle} from "@angular/common";
import {Router} from "@angular/router";

interface Role {
  id: string;
  description: string;
  type: 'receive' | 'pay';
}

@Component({
  selector: 'app-role-selection',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './role-selection.component.html',
  styleUrl: './role-selection.component.css'
})
export class RoleSelectionComponent {
  selectedRole: Role | null = null;

  constructor(private router: Router) { }

  roles: Role[] = [
    { id: 'bedrijf-receive', description: 'Ik ben een bedrijf met openstaande facturen van klanten', type: 'receive' },
    { id: 'zelfstandige-receive', description: 'Ik ben een zelfstandige met openstaande facturen van klanten', type: 'receive' },
    { id: 'particulier-receive', description: 'Ik ben een particulier die geld tegoed heeft', type: 'receive' },
    { id: 'bedrijf-pay', description: 'Ik ben een bedrijf met openstaande leveranciersfacturen', type: 'pay' },
    { id: 'zelfstandige-pay', description: 'Ik ben een zelfstandige met openstaande leveranciersfacturen', type: 'pay' },
    { id: 'particulier-pay', description: 'Ik ben een particulier met schulden bij leveranciers', type: 'pay' }
  ];

  colors = {
    lightBlue: '#E6F3FF',
    lightGreen: '#E6FFF2',
    darkBlue: '#1E90FF',
    darkGreen: '#32CD32',
    gray: '#F0F0F0',
    darkGray: '#333333',
    white: '#FFFFFF',
  };

  selectRole(role: Role): void {
    this.selectedRole = role;
  }

  register(): void {
    if (this.selectedRole) {
      console.log(`Registering as: ${this.selectedRole.description} (${this.selectedRole.type})`);
      // Implement registration logic here
      if (this.selectedRole?.type === 'receive') {
        this.router.navigate(['supplier-onboarding']);
      } else if (this.selectedRole?.type === 'pay') {
        this.router.navigate(['debtor-onboarding']);
      } else {
        // Handle the case where no role is selected
        console.error('No role selected');
        // Optionally, you could show an error message to the user here
      }
    }
  }

  filterRoles(roles: Role[], type: string): Role[] {
    return roles.filter(role => role.type === type);
  }


}
