// Imports modules.
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

// Import service.
import { ContentCreatorsService } from 'src/app/core/services/contentCreators/content-creators.service';

@Component({
  selector: 'app-carousel-creators-content',
  templateUrl: './carousel-creators-content.component.html',
  styleUrls: ['./carousel-creators-content.component.css']
})
export class CarouselCreatorsContentComponent {
  options: OwlOptions = {
    loop: true,
    autoplay: true,
    margin: 15,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      700: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  creatorsContent = [];
  
  constructor(private contentCreatorService: ContentCreatorsService) {
    this.contentCreatorService.list().subscribe(res => {
      this.creatorsContent = res.contentCreators;
    });
  }
}
