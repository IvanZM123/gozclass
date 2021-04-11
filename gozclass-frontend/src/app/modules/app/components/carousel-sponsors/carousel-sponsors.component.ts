// Import module.
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-sponsors',
  templateUrl: './carousel-sponsors.component.html',
  styleUrls: ['./carousel-sponsors.component.css']
})
export class CarouselSponsorsComponent {
  options: OwlOptions = {
    margin: 30,
    autoWidth: true,
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 7
      }
    }
  }
  sponsors = [
    {
      image: "https://image.flaticon.com/icons/png/512/882/882738.png",
      title: "Huawei"
    },
    {
      image: "https://tekki.tv/images/logo.png",
      title: "Tekki"
    },
    {
      image: "https://yt3.ggpht.com/ytc/AAUvwngrdKYyADnSuvrq4MSPGeBC9kTjgF8gbnOHa0EHwg=s900-c-k-c0x00ffffff-no-rj",
      title: "Fernando Herrera"
    },
    {
      image: "https://media-exp1.licdn.com/dms/image/C4E0BAQGtUjIxzxc50w/company-logo_200_200/0/1566945053645?e=2159024400&v=beta&t=FJnHGVhTlywyPvMFr4LFUsfcJvq-SKOBR2GLBFpsJj0",
      title: "Codely.tv"
    },
    {
      image: "https://yt3.ggpht.com/ytc/AAUvwniISbBEa0hK5xdcnrmRDHrXF3UEidXXW1QjsDuL=s900-c-k-c0x00ffffff-no-rj",
      title: "Domini Code"
    },
    {
      image: "https://www.codigofacilito.com/assets/iso_with_outline-beace5140a3d656ab53083ea2f4d082503ab8976c0e9299655ef069edcca5ada.png",
      title: "Codigo Facilito"
    },
    {
      image: "https://pbs.twimg.com/profile_images/1351011751626743809/_nOUgQMo_400x400.png",
      title: "Stackly Code"
    },
    {
      image: "https://yt3.ggpht.com/ytc/AAUvwngsFalXrvhjzKyMdeoqxq1itk7f8pYiVqSXjDB73g=s900-c-k-c0x00ffffff-no-rj",
      title: "Leonidas Esteban"
    },
    {
      image: "https://congreso.latamdev.co/wp-content/uploads/sites/4/2020/02/logo-latam-dev.png",
      title: "LatamDev"
    },
    {
      image: "https://pbs.twimg.com/profile_images/735242324293210112/H8YfgQHP.jpg",
      title: "Egghead"
    }
  ];
}
