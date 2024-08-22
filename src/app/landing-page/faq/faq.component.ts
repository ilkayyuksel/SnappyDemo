import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  constructor() { }

  faqs = [
    {
      question: "Hoe profiteert mijn bedrijf van Snappy?",
      answer: "Snappy helpt u positieve klantrelaties te behouden terwijl uw cashflow verbetert. Het biedt flexibele betalingsoplossingen die zowel voor u als voor uw klanten werken.",
    },
    {
      question: "Is Snappy moeilijk om op te zetten?",
      answer: "Helemaal niet! Snappy is ontworpen voor een snelle en eenvoudige setup. U kunt binnen enkele minuten na registratie beginnen met het maken van betalingsregelingen.",
    },
    {
      question: "Hoe helpt Snappy mijn klanten?",
      answer: "Snappy biedt uw klanten beheersbare betalingsopties, waardoor ze tijdelijke financiële moeilijkheden kunnen overbruggen zonder hun relatie met uw bedrijf te schaden.",
    },
  ];


  ngOnInit(): void {
  }
}
