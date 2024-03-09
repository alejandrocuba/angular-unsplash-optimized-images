import { bootstrapApplication } from '@angular/platform-browser';
import { OptimizedUnsplashImageComponent } from './optimized-unsplash-image.component';
// import { ImageCollectionUnsplashComponent } from './image-loader.component';

bootstrapApplication(OptimizedUnsplashImageComponent)
  .catch(err => console.error(err));
