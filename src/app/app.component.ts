import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header>
      <h1>Standalone Angular App 🚀</h1>
      <nav>
        <a routerLink="/">Home</a> |
        <a routerLink="/about">About</a>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    header { text-align: center; margin-bottom: 20px; }
    nav a { margin: 0 10px; text-decoration: none; color: #0078d4; }
    nav a:hover { text-decoration: underline; }
    main { text-align: center; font-family: Arial, sans-serif; }
  `]
})
export class AppComponent { }
