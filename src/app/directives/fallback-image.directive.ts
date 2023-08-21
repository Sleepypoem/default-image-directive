import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[imageToCheck]',
})
export class FallbackImageDirective implements OnInit {
  @Output() src = new EventEmitter<string>();
  @Input() imageToCheck = '';
  defaultImage =
    'https://res.cloudinary.com/dazl3qqcm/image/upload/v1691263958/spring-angular-ecommerce/assets/images/vyspi9t7uokt16nsym91.png';
  result: string = this.defaultImage;

  constructor(private httpClient: HttpClient) {
    this.checkImageStatus(this.imageToCheck);
  }

  ngOnInit() {
    this.checkImageStatus(this.imageToCheck);
  }

  private checkImageStatus(image: string) {
    this.httpClient.get(image, { responseType: 'blob' }).subscribe(
      (response) => {
        if (response instanceof Blob) {
          this.src.emit(image);
        }
      },
      (error) => {
        this.src.emit(this.defaultImage);
      }
    );
  }
}
