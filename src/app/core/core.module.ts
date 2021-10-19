import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from '@core/components/footer/footer.component';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { NewsComponent } from '@core/components/news/news.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, NewsComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, NewsComponent],
})
export class CoreModule {}
