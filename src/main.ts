import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, RouterLink } from '@angular/router';
import { routes } from './app/app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/about">About</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      padding: 20px;
      background: #f5f5f5;
      margin-bottom: 20px;
    }
    a {
      margin: 0 10px;
      text-decoration: none;
      color: #333;
    }
    a:hover {
      text-decoration: underline;
    }
  `]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});