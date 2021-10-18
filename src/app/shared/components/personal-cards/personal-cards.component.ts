import { Component, Input, OnInit } from '@angular/core';
import { IPersonal } from '@shared/models/Personal';

@Component({
  selector: 'cl-personal-card',
  templateUrl: './personal-cards.component.html',
  styleUrls: ['./personal-cards.component.scss'],
})
export class PersonalCardsComponent {
  @Input() personal!: IPersonal;
}
