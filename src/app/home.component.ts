import { Component } from '@angular/core';

@Component({
    standalone: true,
    template: `
    <h2>Home Page</h2>
    <p>Welcome to the standalone Angular app with SCSS!</p>
  `,
    styles: [`
    h2 { color: #0078d4; }
    p { font-size: 1.2rem; }
  `]
})
export class HomeComponent { }
