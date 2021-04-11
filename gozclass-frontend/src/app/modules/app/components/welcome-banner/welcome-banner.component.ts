// Imports modules.
import { Component } from '@angular/core';

// Imports services.
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.css']
})
export class WelcomeBannerComponent {
  user: any = {};

  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe(user => this.user = user);
  }
}
