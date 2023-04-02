import { CommonModule, ImageLoaderConfig, IMAGE_LOADER, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'image-loader',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://images.unsplash.com/${config.src}?auto=format&w=${config.width}&q=80`;
      },
    },
  ],
  styleUrls: ['./image-loader.component.scss'],
  template: `
    <img
      ngSrc="photo-1675946581335-7ce800416a95"
      width="800"
      height="450"
      alt="image"
      priority
    >
  `
})
export class ImageLoaderComponent { }
