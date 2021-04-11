// Imports modules.
import { Component } from '@angular/core';

// Imports services.
import { WorkshopsService } from 'src/app/core/services/workshops/workshops.service';

@Component({
  selector: 'app-workshops-page',
  templateUrl: './workshops-page.component.html',
  styleUrls: ['./workshops-page.component.css']
})
export class WorkshopsPageComponent {
  workshops: any[] = [];
  
  constructor(private workshopsService: WorkshopsService) {
    this.workshopsService.list().subscribe(res => this.workshops = res.workshops);
  }
}
