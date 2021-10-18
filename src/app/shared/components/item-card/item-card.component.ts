import { Component, Input } from '@angular/core';
import { IItem } from './../../models/Item';

@Component({
  selector: 'cl-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() item!:IItem;
}
