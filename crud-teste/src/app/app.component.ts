import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { ProfissionaisService } from './service/profissionais.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  providers: [
    ProfissionaisService
  ],
  template: `
    <app-header></app-header>
    <div class="bg">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
