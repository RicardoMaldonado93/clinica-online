import { Component, OnInit } from '@angular/core';
import { ICarrousel } from '@shared/models/Carrousel';

@Component({
  selector: 'cl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carouselImages!: ICarrousel[];
  constructor() {
    this.setCarousel()
  }

  ngOnInit(): void {}

  private setCarousel() {
    this.carouselImages = [
      {
        src: 'sliders/slide-one.jpg',
        alt: 'Cirujana',
        title:
          "Servicios Médicos <br><strong>En el que puedes confiar</strong><i class='fas fa-plus-square ms-2 logo' ></i>",
        desc: 'Eveniet sunt aut adipisci esse quia est quidem quo sed. Facere inventore debitis autem culpa sit quia esse aspernatur cupiditate. Et magnam doloribus accusamus aliquid adipisci quod.',
      },
      {
        src: 'sliders/slide-two.jpg',
        alt: 'Doctora',
        title:
          "Nos <strong>Preocupas</strong> por <strong>Vos</strong><i class='fas fa-plus-square ms-2 logo' ></i>",
        desc: 'Eveniet sunt aut adipisci esse quia est quidem quo sed. Facere inventore debitis autem culpa sit quia esse aspernatur cupiditate. Et magnam doloribus accusamus aliquid adipisci quod.',
      },
      {
        src: 'sliders/slide-three.jpg',
        alt: 'Doctora',
        title:
          "Personal calificado con <strong>Experiencia en los servicios que Ofrecemos<i class='fas fa-plus-square ms-2 logo' ></i>",
        desc: 'Eveniet sunt aut adipisci esse quia est quidem quo sed. Facere inventore debitis autem culpa sit quia esse aspernatur cupiditate. Et magnam doloribus accusamus aliquid adipisci quod.',
      },
      // {src:"sliders/slide-three.jpg", alt:'Laboratorio'},
    ];
  }
}
