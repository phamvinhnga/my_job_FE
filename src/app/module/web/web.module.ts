import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { CategoryFoodComponent } from './category-food/category-food.component';
import { SliderComponent } from './slider/slider.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VideoComponent } from './video/video.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    WebComponent,
    FooterComponent,
    HeaderComponent,
    CategoryFoodComponent,
    SliderComponent,
    AboutUsComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    FormsModule,
    WebRoutingModule,
  ],
  exports:[
    WebComponent
  ]
})
export class WebModule { }
