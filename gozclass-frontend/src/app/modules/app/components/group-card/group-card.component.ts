// Imports modules.
import { Component, Input, OnInit } from '@angular/core';

// Imports interfaces.
import { Group } from 'src/app/core/services/group/interfaces/group.interfaces';
import { User } from 'src/app/core/services/user/interfaces/user.interfaces';

// Imports services.
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { GroupService } from 'src/app/core/services/group/group.service';

// Imports components.
import { Notifier } from "src/app/core/helpers/Notifier";

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit {
  @Input() group: Group;
  private user: User;

  constructor(
    private groupService: GroupService,
    private authService: AuthService,
    private notifier: Notifier
  ) {}
  
  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => this.user = user);
  }

  joinGroup(groupId: string): void {
    this.groupService.addMemberToGroup(groupId, this.user._id).subscribe(
      ({ message }) => this.notifier.showNotification(message, "check_circle", "success"),
      ({ error }) => this.notifier.showNotification(error.message, "error", "danger")
    );
  }
}
