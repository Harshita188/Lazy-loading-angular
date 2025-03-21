import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <h2>Welcome to Home</h2>
      <p>This is the eagerly loaded home component</p>
    </div>
  `
})
export class HomeComponent {}