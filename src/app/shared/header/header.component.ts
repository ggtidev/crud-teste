import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge'
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';  
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
