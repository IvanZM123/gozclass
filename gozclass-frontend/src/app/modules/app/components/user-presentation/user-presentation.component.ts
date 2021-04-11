// Imports modules.
import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

// Imports interfaces.
import { User } from 'src/app/core/services/user/interfaces/user.interfaces';

// Imports helpers.
import { LocalStorage } from 'src/app/core/helpers/LocalStorage';
import { GeneratePicture } from 'src/app/core/helpers/GenerateAvatar';

// Imports services.
import { AuthService } from 'src/app/core/services/auth/auth.service';

// Imports components.
import { ModalFileUploadComponent } from '../modal-file-upload/modal-file-upload.component';
import { DetailsUser } from '../details-user-section/interfaces/details-user.interfaces';

@Component({
  selector: 'app-user-presentation',
  templateUrl: './user-presentation.component.html',
  styleUrls: ['./user-presentation.component.css']
})
export class UserPresentationComponent {
  user: User | null = null;
  socialMedia: any[] = [];
  detailsUser: DetailsUser = {
    header: { icon: "info", title: "Detalles del usuario" },
    items: []
  };

  constructor(
    private generatePicture: GeneratePicture,
    private userStorage: LocalStorage<User>,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.watchStateUser();
  }

  private watchStateUser(): void {
    this.authService.currentUser.subscribe(user => {
      this.user = user;
      this.user.avatar = this.user.avatar ? this.user.avatar : this.generatePicture.avatar(user.nickname, 150);
      this.setSocialMedia(user);
      this.setDetailsUser(user);
    });
  }

  private setSocialMedia(user: User) {
    this.socialMedia = [
      {
        img: "/assets/icons/github.svg",
        link: user.githubLink
      },
      {
        img: "/assets/icons/twitter.svg",
        link: user.twitterLink
      },
      {
        img: "/assets/icons/facebook.svg",
        link: user.facebookLink
      },
      {
        img: "/assets/icons/linkedin.svg",
        link: user.linkedinLink
      }
    ];
  }

  private setDetailsUser({ gender, country, birthday }: User): void {
    Object.entries({ gender, country, birthday }).forEach(value => {
      if (!!value[1]) this.detailsUser.items = [
        { icon: "male", text: gender },
        { icon: "location_on", text: country },
        { icon: "calendar_today", text: birthday?.toString() }
      ];
    });
  }

  changeAvatar(): void {
    const dialogRef = this.dialog.open(ModalFileUploadComponent, {
      width: "500px",
      disableClose: true,
      data: { route: `/${ this.user._id }/avatar` }
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (!result) return;
      this.user.avatar = result;
      this.userStorage.insert(this.userStorage.TEAMANGULAR15_USER, this.user);
    });
  }

  changeBanner(): void {
    const dialogRef = this.dialog.open(ModalFileUploadComponent, {
      width: "500px",
      disableClose: true,
      data: { route: `/${ this.user._id }/banner` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.user.banner = result;
      this.userStorage.insert(this.userStorage.TEAMANGULAR15_USER, this.user);
    });
  }
}
