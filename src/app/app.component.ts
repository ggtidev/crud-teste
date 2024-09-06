import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
  
  `,
  styles: []
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
