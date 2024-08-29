import { Component, Input } from '@angular/core';
import {NgClass} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-infocard',
  standalone: true,
  imports: [
    NgClass,
    MatIcon
  ],
  templateUrl: './infocard.component.html',
  styleUrl: './infocard.component.css'
})
export class InfocardComponent {
  @Input() icon: string= '';
  @Input() label: string= '';
  @Input() value: number | string = 0;
  @Input() bgColor: string = 'bg-gray-500';
}
