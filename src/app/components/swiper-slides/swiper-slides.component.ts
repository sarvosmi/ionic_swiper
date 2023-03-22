import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import SwiperCore, {Keyboard,Pagination,Navigation,Scrollbar,Autoplay,
EffectCube,EffectFade,EffectFlip,EffectCards} from 'swiper';
import { SwiperComponent } from 'swiper/angular';


SwiperCore.use([Keyboard,Pagination,Navigation,Scrollbar,Autoplay,
  EffectCube,EffectFade,EffectFlip,EffectCards])

@Component({
  selector: 'app-swiper-slides',
  templateUrl: './swiper-slides.component.html',
  styleUrls: ['./swiper-slides.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwiperSlidesComponent implements OnInit {

  @ViewChild('swiper1', { static: false }) swiper1:SwiperComponent;

  images=['../../assets/images/photo-1.jpg',
  '../../assets/images/photo-2.jpg',
  '../../assets/images/photo-3.jpg',
  '../../assets/images/photo-4.jpg',
  '../../assets/images/photo-5.jpg',
  '../../assets/images/photo-6.jpg'
]

  constructor() { }
  
 
  ngOnInit() {
     
  }
  ngAfterContentChecked(): void {
    if(this.swiper1)
    {
      this.swiper1.updateSwiper({})     
      this.swiper1.swiperRef.autoplay.start();
         
    }
  }
  
  onSlidePrev()
  {
      this.swiper1.swiperRef.slidePrev(1500);
  }
  onSlideNext()
  {
    this.swiper1.swiperRef.slideNext(1000)
  }
  
}
