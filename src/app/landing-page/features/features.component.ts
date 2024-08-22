import { Component } from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features: Array<{ icon: SafeHtml, title: string, description: string }> = [];
  constructor(private sanitizer: DomSanitizer) {

    this.features = [
      {
        icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-blue-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'),
        title: "Versterk Relaties",
        description: "Bouw vertrouwen en loyaliteit op terwijl u een stabiele cashflow waarborgt.",
      },
      {
        icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-yellow-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'),
        title: "Bliksemsnelle Oplossing",
        description: "Onze 60-seconden garantie voor een aflossingsplan op maat.",
      },
      {
        icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-green-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>'),
        title: "Ethisch Verantwoord Invorderen",
        description: "U past geen schadebeding toe en mag in ruil Snappy onbeperkt gratis gebruiken.",
      },
      {
        icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-purple-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>'),
        title: "Wederzijdse Groei",
        description: "Transformeer uitdagingen in kansen voor gezamenlijk succes.",
      },
    ];
  }


  ngOnInit(): void {
  }

}
