// Imports modules.
import { Component, Input } from '@angular/core';

// Imports interfaces.
import { DetailsUser } from './interfaces/details-user.interfaces';

@Component({
  selector: 'app-details-user-section',
  templateUrl: './details-user-section.component.html',
  styleUrls: ['./details-user-section.component.css']
})
export class DetailsUserSectionComponent{
  @Input() details: DetailsUser;
}
