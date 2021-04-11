// Imports modules.
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// Import interfaces.
import { UserResponse } from 'src/app/core/services/user/interfaces/user.interfaces';

// Imports helpers.
import { LocalStorage } from 'src/app/core/helpers/LocalStorage';

// Imports services.
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

// Imports component.
import { Notifier } from 'src/app/core/helpers/Notifier';

@Component({
  selector: 'app-user-fields-form',
  templateUrl: './user-fields-form.component.html',
  styleUrls: ['./user-fields-form.component.css']
})
export class UserFieldsFormComponent {
  private user: any = {};
  form: FormGroup = new FormGroup({
    nickname: new FormControl(""),
    country: new FormControl(""),
    gender: new FormControl(""),
    githubLink: new FormControl(""),
    biography: new FormControl(""),
    birthday: new FormControl(""),
    knowledgeAreas: new FormControl(""),
    twitterLink: new FormControl(""),
    facebookLink: new FormControl(""),
    linkedinLink: new FormControl("")
  });

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private storage: LocalStorage<any>,
    private notifier: Notifier
  ) {
    this.setUser();
  }

  private setUser(): void {
    this.authService.currentUser.subscribe((user: any) => {
      this.user = user;
      this.form.setValue({
        nickname: user.nickname,
        country: user.country || "",
        gender: user.gender || "",
        birthday: user.birthday || "",
        biography: user.biography || "",
        knowledgeAreas: user.knowledgeAreas || "",
        githubLink: user.githubLink || "",
        twitterLink: user.twitterLink || "",
        facebookLink: user.facebookLink || "",
        linkedinLink: user.linkedinLink || ""
      });
    });
  }

  updateUser(): void {
    this.userService.update(this.user._id, this.form.value).subscribe(
      res => this.successRequest(res),
      err => this.notifier.showNotification(err.error.message, "error", "danger")
    );
  }

  private successRequest(res: UserResponse): void {
    const { user, message } = res;
    this.storage.insert(this.storage.TEAMANGULAR15_USER, user);
    this.notifier.showNotification(message, "edit", "warning");
  }
}
