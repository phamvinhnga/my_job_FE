import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slides = [
    {img: "http://katinat.vn/wp-content/uploads/2022/09/ban1.jpg"},
    {img: "http://katinat.vn/wp-content/uploads/2022/09/ban3_1.jpg"},
  ];

  slideConfig = { 
    enabled: true,
    autoplay: true,
    autoplaySpeed: 2000,
    "slidesToShow": 1, 
    "slidesToScroll": 1
  };

  ngOnInit(): void {
  }

}
