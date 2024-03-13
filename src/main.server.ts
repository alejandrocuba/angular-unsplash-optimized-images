import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { OptimizedUnsplashImageComponent } from './optimized-unsplash-image.component';

const bootstrap = () => bootstrapApplication(OptimizedUnsplashImageComponent, config);

export default bootstrap;
