import {Component, Input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-info-icon',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf
  ],
  templateUrl: './info-icon.component.html',
  styleUrl: './info-icon.component.css'
})
export class InfoIconComponent {
  @Input() infoText: string = '';
  infoTextLines: string[] = [];
  isVisible: boolean = false;

  ngOnInit() {
    this.infoTextLines = this.splitText(this.infoText, 130);
  }

  splitText(text: string, maxLength: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
      if ((currentLine + word).length <= maxLength) {
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines;
  }

  showInfo() {
    this.isVisible = true;
  }

  hideInfo() {
    this.isVisible = false;
  }
}
