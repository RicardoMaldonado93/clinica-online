import { Component, Input, OnInit } from '@angular/core';
import { ICarrousel } from '@shared/models/Carrousel';

@Component({
  selector: 'cl-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() images: Array<ICarrousel> = [];
}
