import {Component, effect, inject} from '@angular/core';
import {CommonModule, NgClass, NgIf, NgStyle} from '@angular/common';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./modules/shared/components/header/header.component";
import {FooterComponent} from "./modules/shared/components/footer/footer.component";
import {filter} from "rxjs";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SnappyClient';

  private router = inject(Router);

  constructor() {
    effect(() => {
      this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe(() => {
        window.scrollTo(0, 0);
      });
    });
  }
}
