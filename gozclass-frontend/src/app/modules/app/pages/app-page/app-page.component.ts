// Imports modules.
import { Component, OnInit } from '@angular/core';

// Imports interfaces
import { StickerSection } from "src/app/modules/app/components/general-sticker-section/interfaces/stickerSection.interfaces";
import { Community } from 'src/app/core/services/communities/interfaces/community.interfaces';

// Imports services.
import { CommunitiesService } from 'src/app/core/services/communities/communities.service';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements OnInit {
  communitiesSection: StickerSection = {
    header: { icon: "supervisor_account", title: "Comunidades" },
    link: "/app/communities",
    stickers: []
  };

  constructor(private communityService: CommunitiesService) {}

  ngOnInit(): void {
    this.communityService.list().subscribe(({ communities }) => {
      communities.forEach(community => this.setSectionCommunities(community));
    });
  }

  private setSectionCommunities(community: Community) {
    this.communitiesSection.stickers.push({
      title: community.title,
      avatar: community.banner,
      link: { content: "Unirme", url: community.url }
    });
  }
}
