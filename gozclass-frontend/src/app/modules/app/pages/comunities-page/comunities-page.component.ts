// Imports modules.
import { Component, OnInit } from '@angular/core';

// Imports interfaces.
import { Community } from 'src/app/core/services/communities/interfaces/community.interfaces';

// Imports services.
import { CommunitiesService } from 'src/app/core/services/communities/communities.service';

@Component({
  selector: 'app-comunities-page',
  templateUrl: './comunities-page.component.html',
  styleUrls: ['./comunities-page.component.css']
})
export class ComunitiesPageComponent implements OnInit {
  communities: Community[] = [];

  constructor(private communitiesService: CommunitiesService) {}

  ngOnInit(): void {
    this.communitiesService.list().subscribe(res => this.communities = res.communities);
  }
}
