import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FallbackImageDirective } from './directives/fallback-image.directive';
import { HttpClientModule } from '@angular/common/http';
import { ImageWithFallbackComponent } from './components/image-with-fallback/image-with-fallback.component';

@NgModule({
  declarations: [AppComponent, FallbackImageDirective, ImageWithFallbackComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
