import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

interface SelectionItem {
  id: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-user-role-type-selector',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgForOf,
    MatIcon
  ],
  templateUrl: './user-role-type-selector.component.html',
  styleUrl: './user-role-type-selector.component.css'
})
export class UserRoleTypeSelectorComponent {


  constructor(private router: Router) { }

  selectedRole: string | null = null;
  selectedType: string | null = null;

  roles: SelectionItem[] = [
    { id: 'creditor', name: 'Schuldeiser', icon: 'credit_card' },
    { id: 'debtor', name: 'Schuldenaar', icon: 'account_balance_wallet' }
  ];

  types: SelectionItem[] = [
    { id: 'company', name: 'Bedrijf', icon: 'business' },
    { id: 'self-employed', name: 'Zelfstandige', icon: 'work' },
    { id: 'private', name: 'Particulier', icon: 'person' }
  ];

  selectRole(role: string): void {
    this.selectedRole = role;
    this.selectedType = null;
  }

  selectType(type: string): void {
    this.selectedType = type;
  }

  getSelectedRole(): SelectionItem | undefined {
    return this.roles.find(r => r.id === this.selectedRole);
  }

  getSelectedType(): SelectionItem | undefined {
    return this.types.find(t => t.id === this.selectedType);
  }

  navigateToForm() {
    if (this.selectedRole === 'creditor') {
      this.router.navigate(['supplier-onboarding']);
    } else if (this.selectedRole === 'debtor') {
      this.router.navigate(['debtor-onboarding']);
    } else {
      // Handle the case where no role is selected
      console.error('No role selected');
      // Optionally, you could show an error message to the user here
    }


  }

  ngOnInit(): void {
  }
}
