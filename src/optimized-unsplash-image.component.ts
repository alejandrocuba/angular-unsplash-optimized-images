import { IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-optimized-unsplash-image',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <article>
      <h1>Angular Optimized Image</h1>
      <img
        alt="Optimized Unsplash Image"
        ngSrc="0*hiSjMcbdqbV35wRI"
        width="600"
        height="400"
        decoding="sync"
        priority
      />
    </article>
  `,
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://cdn-images-1.medium.com/max/${config.width}/${config.src}`;
      },
    },
  ]
})
export class OptimizedUnsplashImageComponent {}