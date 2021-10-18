import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

@NgModule({
  declarations: [CarouselComponent, ItemCardComponent],
  imports: [CommonModule],
  exports: [CarouselComponent, ItemCardComponent],
})
export class SharedModule {}
