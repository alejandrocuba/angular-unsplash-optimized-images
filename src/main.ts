import { bootstrapApplication } from '@angular/platform-browser';
import { ImageLoaderComponent } from './app/image-loader/image-loader.component';

bootstrapApplication(ImageLoaderComponent)
  .catch(err => console.error(err));
