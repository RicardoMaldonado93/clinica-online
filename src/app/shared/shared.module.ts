import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { NewsComponent } from '@shared/components/news/news.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, NewsComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
