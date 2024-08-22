import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

  constructor() { }

  testimonials = [
    {
      quote: "Snappy heeft onze aanpak van openstaande rekeningen getransformeerd. Onze klanten waarderen de flexibele benadering en we hebben een verbetering van 40% in inningspercentages gezien.",
      author: "Sarah T., Eigenaar van een Klein Bedrijf",
    },
    {
      quote: "Het gebruik van Snappy voelt als het uitsteken van een helpende hand in plaats van het stellen van eisen. Het heeft zowel onze klantrelaties als onze cashflow verbeterd.",
      author: "Michael R., Accountmanager",
    },
  ];

  ngOnInit(): void {
  }

}
