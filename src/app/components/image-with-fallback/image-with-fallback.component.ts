import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-with-fallback',
  templateUrl: './image-with-fallback.component.html',
  styleUrls: ['./image-with-fallback.component.css'],
})
export class ImageWithFallbackComponent {
  @Input() imgsrc = '';
  @Input() classes: string[] = [];
  @Input() alt = '';
  @Input() imgWidth = '';
  @Input() imgHeight = '';
  imgResult: string = '';

  receiveImage(event: any) {
    console.log(event);
    this.imgResult = event;
  }
}
