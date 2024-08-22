import { Component } from '@angular/core';
import {TestimonialsComponent} from "./testimonials/testimonials.component";
import {FaqComponent} from "./faq/faq.component";
import {HowItWorksComponent} from "./how-it-works/how-it-works.component";
import {EthicalApproachComponent} from "./ethical-approach/ethical-approach.component";
import {FeaturesComponent} from "./features/features.component";
import {HeroSectionComponent} from "./hero-section/hero-section.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    TestimonialsComponent,
    FaqComponent,
    HowItWorksComponent,
    EthicalApproachComponent,
    FeaturesComponent,
    HeroSectionComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
