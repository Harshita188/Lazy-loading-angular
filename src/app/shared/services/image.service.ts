import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private readonly imageUrls: string[] = Array.from({ length: 20 }, (_, i) => 
    `https://picsum.photos/400/${300 + i}`
  );
  
  private loadedImages: string[] = [];
  private batchSize = 4;
  private currentIndex = 0;

  getNextBatch(): string[] {
    const batch = this.imageUrls.slice(
      this.currentIndex,
      this.currentIndex + this.batchSize
    );
    this.currentIndex += this.batchSize;
    this.loadedImages.push(...batch);
    return this.loadedImages;
  }

  get allImages(): string[] {
    return this.loadedImages;
  }
}