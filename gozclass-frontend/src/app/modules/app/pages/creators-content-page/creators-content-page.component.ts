// Imports modules.
import { Component } from '@angular/core';

// Imports services.
import { ContentCreatorsService } from 'src/app/core/services/contentCreators/content-creators.service';
import { ContentCreator } from 'src/app/core/services/contentCreators/interfaces/contentCreators.interfaces';

@Component({
  selector: 'app-creators-content-page',
  templateUrl: './creators-content-page.component.html',
  styleUrls: ['./creators-content-page.component.css']
})
export class CreatorsContentPageComponent {
  items: ContentCreator[] = [];

  constructor(private contentCreatorService: ContentCreatorsService) {
    this.contentCreatorService.list().subscribe(res => {
      this.items = res.contentCreators;
    });
  }
}
