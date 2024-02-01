import { CommonModule, IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-optimized-unsplash-image',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <article>
      <img
        alt="Optimized Unsplash Image"
        ngSrc="photo-1675946581335-7ce800416a95"
        width="800"
        height="450"
        decoding="sync"
        priority
      />
    </article>
  `,
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://images.unsplash.com/${config.src}?auto=format&w=${config.width}&q=80`;
      },
    },
  ]
})
export class OptimizedUnsplashImageComponent {}