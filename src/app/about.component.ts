import { Component } from '@angular/core';

@Component({
    standalone: true,
    template: `
    <h2>About Page</h2>
    <p>This is a sample standalone Angular app ready for Azure deployment.</p>
  `,
    styles: [`
    h2 { color: #ff4081; }
    p { font-size: 1.2rem; }
  `]
})
export class AboutComponent { }
