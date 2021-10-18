import { IPersonal } from './../../../shared/models/Personal';
import { IItem } from './../../../shared/models/Item';
import { Component, OnInit } from '@angular/core';
import { ICarrousel } from '@shared/models/Carrousel';

@Component({
  selector: 'cl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carouselImages!: ICarrousel[];
  servicesItems!: IItem[];
  personalInfo!: IPersonal[];

  constructor() {
    this.setCarousel();
    this.setItems();
    this.setPersonalInfo()
  }

  ngOnInit(): void {

  }

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

  private setItems(){
    const lorem = "Quae modi architecto blanditiis ut voluptatem aut qui. Aut quisquam officiis quibusdam eaque. Natus dolores mollitia earum eaque ipsa est qui ea error."
    this.servicesItems = [
      {
        title: "Centro de Rehabilitacion",
        icon: "fa-plus-square",
        desc:lorem
      },
      {
        title: "Asesoramiento Medico ",
        icon: "fa-medkit",
        desc: lorem
      },
      {
        title: "Doctores Calificados",
        icon: "fa-user-md",
        desc: lorem
      },
      {
        title: "Servicios de Emergencias",
        icon: "fa-ambulance",
        desc: lorem
      }
    ]
  }

  private setPersonalInfo(){
    const lorem = "This text represents a brief introduction of doctor and this text will be displayed on homepage and all the places where multiple doctors are listed."
    this.personalInfo = [
      {
        photo: "doctors/doctors-1.jpg",
        name: "Addison",
        lastName: "Alexander",
        specialty: lorem
      },
      {
        photo: "doctors/doctors-2.jpg",
        name: "Addison",
        lastName: "Alexander",
        specialty: lorem
      },
      {
        photo: "doctors/doctors-3.jpg",
        name: "Addison",
        lastName: "Alexander",
        specialty: lorem
      },
      {
        photo: "doctors/doctors-4.jpg",
        name: "Addison",
        lastName: "Alexander",
        specialty: lorem
      },

    ]
  }


}
