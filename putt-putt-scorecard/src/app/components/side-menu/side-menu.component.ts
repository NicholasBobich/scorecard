import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [SidebarModule, ButtonModule, MenuModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  sidebarVisible: boolean = false;
  items: MenuItem[] | undefined;

  constructor (private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Menu',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: '/home',
            command: () => {
              this.sidebarVisible = !this.sidebarVisible;
            }
          },
          {
            label: 'Play',
            icon: 'pi pi-play',
            routerLink: '/play',
            command: () => {
              this.sidebarVisible = !this.sidebarVisible;
            }
          },
          {
            label: 'Add',
            icon: 'pi pi-plus-circle',
            routerLink: '/add',
            command: () => {
              this.sidebarVisible = !this.sidebarVisible;
            }
          },
          {
            label: 'History',
            icon: 'pi pi-history',
            routerLink: '/history',
            command: () => {
              this.sidebarVisible = !this.sidebarVisible;
            }
          }
        ]
      }
    ]
  }
}
