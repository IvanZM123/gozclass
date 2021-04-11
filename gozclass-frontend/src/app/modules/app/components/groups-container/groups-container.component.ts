// Imports modules.
import { MatSelectChange } from '@angular/material/select';
import { Component, OnInit } from '@angular/core';

// Imports models.
import { Group } from 'src/app/core/services/group/interfaces/group.interfaces';
import { User } from 'src/app/core/services/user/interfaces/user.interfaces';

// Imports services.
import { GroupService } from 'src/app/core/services/group/group.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-groups-container',
  templateUrl: './groups-container.component.html',
  styleUrls: ['./groups-container.component.css']
})
export class GroupsContainerComponent implements OnInit {
  myGroups: Group[] = [];
  languages: Set<string>;
  groups: Group[] = [];
  currentGroup: Group;

  constructor(
    private groupService: GroupService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.groupService.list().subscribe(({ groups }) => {
      this.languages = new Set(groups.map(group => group.tag.text));
      this.groups = groups;

      this.authService.currentUser.subscribe(user => {
        // Filter my groups
        this.myGroups = groups.filter(group => {
          const users: User[] = group.members.filter(member => member._id === user._id);
          if (users.length > 0) return { name: group.name, id: group._id };
        });
      });
    });
  }

  filter(event: MatSelectChange): void {
    const elements = document.querySelectorAll("#group-card") as NodeListOf<HTMLElement>;
    elements.forEach(element => {
      const word: string = element.className.toLocaleLowerCase();
      let keyword = event.value as string;
      const status: boolean = word.indexOf(keyword.toLocaleLowerCase()) !== -1 ? true : false;
      this.conditionRendering(element.parentElement, status);
    });
  }

  search(event: Event): void {
    const input = event.target as HTMLInputElement;
    const elements = document.querySelectorAll("#group-card") as NodeListOf<HTMLElement>;

    elements.forEach(element => {
      const keyword: string = input.value.toLocaleLowerCase();
      const word: string = element.textContent.toLocaleLowerCase();
      const status: boolean = word.indexOf(keyword) !== -1 ? true : false;
      this.conditionRendering(element.parentElement, status);
    });
  }

  filterMyGroup(event: MatSelectChange) {
    const groupId = event.value as string;
    this.currentGroup = this.groups.find(group => group._id === groupId);
  }

  private conditionRendering(element: HTMLElement, status: boolean): void {
    if (status) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
}
