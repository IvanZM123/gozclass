// Imports modules.
import { Component, Input } from '@angular/core';

// Imports interfaces.
import { ContentCreator } from 'src/app/core/services/contentCreators/interfaces/contentCreators.interfaces';

@Component({
  selector: 'app-card-content-creator',
  templateUrl: './card-content-creator.component.html',
  styleUrls: ['./card-content-creator.component.css']
})
export class CardContentCreatorComponent {
  @Input() contentCreator: ContentCreator;
}
