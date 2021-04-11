// Imports modules.
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

// Imports interfaces.
import { Group } from 'src/app/core/services/group/interfaces/group.interfaces';
import { User } from 'src/app/core/services/user/interfaces/user.interfaces';

// Imports services.
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { GroupService } from 'src/app/core/services/group/group.service';

// Imports helpers.
import { Notifier } from 'src/app/core/helpers/Notifier';

@Component({
  selector: 'app-groups-section',
  templateUrl: './groups-section.component.html',
  styleUrls: ['./groups-section.component.css']
})
export class GroupsSectionComponent implements OnChanges {
  @Input() groups: Group[];
  groupSelectorItems: { name: string; id: string }[] = [];
  group: Group;
  private user: User;

  constructor(
    private groupService: GroupService,
    private authService: AuthService,
    private notifier: Notifier
  ) {
    this.authService.currentUser.subscribe(user => this.user = user);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const groups = changes.groups.currentValue as Group[];
    this.groupSelectorItems = groups.map(({ name, _id }) => ({ name, id: _id }));
    this.group = groups[0];
  }

  filter(event: MatSelectChange): void {
    const groupId = event.value as string;
    this.group = this.groups.find(group => group._id === groupId);
  }

  leaveGroup(groupId: string): void {
    // Open modal
    const message: string = `¿${ this.user.nickname }, deseas abandonar este grupo?`;
    const { banner } = this.groups.find(group => group._id === groupId);
    
    const dialogRef = this.notifier.showModal({
      text: message,
      image: banner,
      modalConfirm: true
    });

    // Execute actions.
    dialogRef.beforeClosed().subscribe((data: { confirm: boolean }) => {
      if (data.confirm) {
        this.groupService.removeUserFromGroup(groupId, this.user._id).subscribe(
          res => this.successReq(res.message, groupId),
          ({ error }) => this.notifier.showNotification(error.message, "error", "danger")
        );
      }
    });
  }

  private successReq(message: string, groupId: string) {
    // Show modal.
    this.notifier.showModal({ text: message });

    // Find index.
    const indexSelector: number = this.groupSelectorItems.findIndex(group => group.id === groupId);
    const indexGroup = this.groups.findIndex(group => group._id === groupId);
    
    // Removes groups and selectors.
    this.groupSelectorItems.splice(indexSelector, 1);
    this.groups.splice(indexGroup, 1);

    // We assign a different group
    this.group = this.groups[0];
  }
}
