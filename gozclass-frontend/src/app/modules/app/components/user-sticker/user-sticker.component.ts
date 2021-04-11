// Imports modules.
import { Component } from '@angular/core';

// Import interface.
import { User } from 'src/app/core/services/user/interfaces/user.interfaces';

// Import helper.
import { GeneratePicture } from 'src/app/core/helpers/GenerateAvatar';

// Imports services.
import { AuthService } from "src/app/core/services/auth/auth.service";

@Component({
  selector: 'app-user-sticker',
  templateUrl: './user-sticker.component.html',
  styleUrls: ['./user-sticker.component.css']
})
export class UserStickerComponent {
  public user: User;

  constructor(
    private generatePicture: GeneratePicture,
    private authService: AuthService
  ) {
    this.authService.currentUser.subscribe(user => this.setUser(user));
  }

  private setUser(user: User): void {
    // Set user.
    this.user = user;

    // Set avatar.
    this.user.avatar = user.avatar ? user.avatar : this.generatePicture.avatar(user.nickname, 30);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
