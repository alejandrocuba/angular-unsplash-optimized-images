import { bootstrapApplication } from '@angular/platform-browser';
import { ImageLoaderComponent } from './image-loader.component';

bootstrapApplication(ImageLoaderComponent)
  .catch(err => console.error(err));
