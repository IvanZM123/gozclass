// Imports modules.
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// Imports interfaces.
import { Badge } from "src/app/core/services/badge/interfaces/badge.interfaces";
import { Group } from 'src/app/core/services/group/interfaces/group.interfaces';
import { Event } from 'src/app/core/services/events/interfaces/events.interfaces';
import { StickerSection } from '../general-sticker-section/interfaces/stickerSection.interfaces';

// Imports services.
import { BadgeService } from 'src/app/core/services/badge/badge.service';
import { GroupService } from 'src/app/core/services/group/group.service';
import { EventService } from 'src/app/core/services/events/event.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-profile-sections',
  templateUrl: './profile-sections.component.html',
  styleUrls: ['./profile-sections.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileSectionsComponent implements OnInit {
  myInsigniaSection: StickerSection = {
    header: { icon: "military_tech", title: "Mis insignias" },
    stickers: []
  };

  myGroupSection: StickerSection = {
    header: { icon: "supervisor_account", title: "Mis grupos" },
    stickers: []
  };

  myEventSection: StickerSection = {
    header: { icon: "event", title: "Mis eventos" },
    stickers: []
  };

  badges: Badge[] = [];
  events: Event[] = [];

  constructor(
    private badgeService: BadgeService,
    private groupService: GroupService,
    private eventService: EventService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.badgeService.getByUserId(user._id).subscribe(({ badges }) => {
        this.setMyBadgeSection(badges, user.nickname);
      });

      this.groupService.listByUser(user._id).subscribe(({ groups }) => {
        this.setMySectionGroups(groups, user.nickname);
      });

      this.eventService.listByUser(user._id).subscribe(({ events }) => {
        this.setMyEvenSection(events, user.nickname);
      });
    });

    this.badgeService.list().subscribe(res => this.badges = res.badges);
    this.eventService.list().subscribe(({ events }) => this.events = events);
  }

  private setMyBadgeSection(badges: Badge[], nickname: string): void {
    badges.forEach(badge => {
      this.myInsigniaSection.stickers.push({
        avatar: badge.logo,
        title: `¡Felicidades ${ nickname }! Has obtenido la insignia ${ badge.title }`,
        subtitle: badge.challenge
      });
    });
  }

  private setMySectionGroups(groups: Group[], nickname: string): void {
    groups.forEach(group => {
      this.myGroupSection.stickers.push({
        avatar: group.banner,
        title: `${ nickname }, ahora formas parte del grupo ${ group.name }`,
        subtitle: group.description
      });
    });
  }

  private setMyEvenSection(events: Event[], nickname: string) {
    events.forEach(event => {
      this.myEventSection.stickers.push({
        subtitle: event.description,
        avatar: event.banner,
        title: `${ nickname }, te has sucrito al evento ${ event.name }`
      });
    });
  }

  removeEvent(data: { eventId: string }): void {
    const index: number = this.events.findIndex(event => event._id === data.eventId);
    this.events.splice(index, 1);
  }
}
