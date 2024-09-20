import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  template: `
    <ng-container *ngIf="!isCrudListPage()">
      <app-header></app-header>
    </ng-container>
    <div class="bg">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = '';

  constructor(private router: Router) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light';
      const body = document.body;

      if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
      } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
      }
    }
  }

  isCrudListPage(): boolean {

    return this.router.url.includes('/crud-list');
  }
}
