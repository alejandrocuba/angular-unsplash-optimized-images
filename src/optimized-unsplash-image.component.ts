import { IMAGE_CONFIG, IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';
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
        sizes="(max-width: 400px) 100vw, (max-width: 1200px) 50vw, 100vw"
        width="600"
        height="400"
        decoding="sync"
        priority
        placeholder
      />
    </article>
  `,
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        breakpoints: [380, 640, 1200, 1920, 2048, 3840],
        placeholderResolution: 25
      }
    },
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://cdn-images-1.medium.com/max/${config.width}/${config.src}`;
      },
    },
  ]
})
export class OptimizedUnsplashImageComponent { }