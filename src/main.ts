import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { OptimizedUnsplashImageComponent } from './optimized-unsplash-image.component';
// import { ImageCollectionUnsplashComponent } from './image-loader.component';

bootstrapApplication(OptimizedUnsplashImageComponent, {
  providers: [provideClientHydration()]
})
  .catch(err => console.error(err));
