import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {

  constructor() { }

  steps = [
    "Registreer uw account",
    "Voeg klantinformatie toe",
    "Stel flexibele betalingsregelingen op",
    "Volg de voortgang samen",
  ];


  ngOnInit(): void {
  }

}
