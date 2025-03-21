import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadDirective } from '../shared/directives/lazy-load.directive';
import { ImageService } from '../shared/services/image.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LazyLoadDirective],
  template: `
    <div class="about-container">
      <h2>About Us</h2>
      <p>This component is lazy loaded!</p>
      <div class="image-container">
        <div *ngFor="let image of images" class="image-wrapper">
          <img
            [appLazyLoad]="image"
            [dataSrc]="image"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            [alt]="'Image ' + image"
          />
          <div class="loading-placeholder">Loading...</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .image-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;
    }
    .image-wrapper {
      position: relative;
      min-height: 300px;
      background: #f5f5f5;
    }
    img {
      max-width: 100%;
      height: auto;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    img[src]:not([src=""]) {
      opacity: 1;
    }
    .loading-placeholder {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `]
})
export class AboutComponent implements OnInit {
  images: string[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.loadMoreImages();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.isNearBottom()) {
      this.loadMoreImages();
    }
  }

  private isNearBottom(): boolean {
    return (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 200;
  }

  private loadMoreImages() {
    this.images = this.imageService.getNextBatch();
  }
}