import { CommonModule, IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { mockUnsplashImages } from './mock-images.data';

export interface UnsplashImage {
  title: string;
  id: string;
  srcset: string;
  sizes: string;
  width?: number;
  height?: number;
  fill?: boolean;
  decoding: 'sync' | 'async' | 'auto';
  loading?: 'lazy' | 'eager' | 'auto';
  priority?: boolean;
  quality?: number;
}

@Component({
  selector: 'app-image-collection-unsplash',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <article #images *ngFor="let image of unsplashImages">
      <ng-container *ngIf="!image.fill">
        <ng-container *ngIf="!image.priority; else priorityImage">
          <img
            [alt]="image.title"
            [ngSrc]="image.id"
            [ngSrcset]="image.srcset"
            [sizes]="image.sizes"
            [width]="image.width"
            [height]="image.height"
            [attr.decoding]="image.decoding"
            [loading]="image.loading"
          />
        </ng-container>
        <ng-template #priorityImage>
          <img
            [alt]="image.title"
            [ngSrc]="image.id"
            [ngSrcset]="image.srcset"
            [sizes]="image.sizes"
            [width]="image.width"
            [height]="image.height"
            [attr.decoding]="image.decoding"
            priority
          />
        </ng-template>
      </ng-container>
      <ng-container *ngIf="image.fill">
        <ng-container *ngIf="!image.priority; else priorityFillImage">
          <img
            [alt]="image.title"
            [ngSrc]="image.id"
            [ngSrcset]="image.srcset"
            [sizes]="image.sizes"
            [fill]="image.fill"
            [attr.decoding]="image.decoding"
            [loading]="image.loading"
          />
        </ng-container>
        <ng-template #priorityFillImage>
          <img
            [alt]="image.title"
            [ngSrc]="image.id"
            [ngSrcset]="image.srcset"
            [sizes]="image.sizes"
            [fill]="image.fill"
            [attr.decoding]="image.decoding"
            priority
          />
        </ng-template>
      </ng-container>
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
export class ImageCollectionUnsplashComponent implements AfterViewInit {
  unsplashImages: UnsplashImage[] = mockUnsplashImages;

  @ViewChild('images') images!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(): void {
    const firstImage = this.images.nativeElement.querySelector('img:first-child');
    if (firstImage) {
      (firstImage as HTMLImageElement).src = "https://images.unsplash.com/photo-1675931220426-d568e61a6ac8";
      (firstImage as HTMLImageElement).srcset = "";
    }
  }
}