import {Component, EventEmitter, Output, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-actioncard',
  standalone: true,
  imports: [
    NgClass,
    MatIcon
  ],
  templateUrl: './actioncard.component.html',
  styleUrl: './actioncard.component.css'
})
export class ActioncardComponent {
  @Input() title: string = '';
  @Input() buttonText: string = '';
  @Input() icon: string = '';
  @Input() buttonClass: string = '';
  @Output() onClick = new EventEmitter<void>();
}
