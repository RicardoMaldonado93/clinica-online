import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { PersonalCardsComponent } from './components/personal-cards/personal-cards.component';

@NgModule({
  declarations: [CarouselComponent, ItemCardComponent, PersonalCardsComponent],
  imports: [CommonModule],
  exports: [CarouselComponent, ItemCardComponent, PersonalCardsComponent],
})
export class SharedModule {}
