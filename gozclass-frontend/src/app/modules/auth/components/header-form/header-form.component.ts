// Imports modules.
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// Imports interfaces.
import { AuthTokens, LoginResponse } from 'src/app/core/services/auth/interfaces/auth.interfaces';
import { User } from 'src/app/core/services/user/interfaces/user.interfaces';

// Imports helpers.
import { LocalStorage } from "src/app/core/helpers/LocalStorage";
import { Notifier } from 'src/app/core/helpers/Notifier';

// Imports services.
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.css']
})
export class HeaderFormComponent {
  @Input() header: { title: string; subtitle: string };

  constructor(
    private localStorage: LocalStorage<User | AuthTokens>,
    private authService: AuthService,
    private notifier: Notifier,
    private router: Router
  ) {}

  async google(): Promise<void> {
    const res: Observable<LoginResponse> = await this.authService.signInGoogle();
    res.subscribe(
      data => this.successLogin(data),
      err => console.error(err)
    );
  }

  async facebook(): Promise<void> {
    const res: Observable<LoginResponse> = await this.authService.signInFacebook();
    res.subscribe(
      data => this.successLogin(data),
      () => this.failureLogin()
    );
  }

  private successLogin(data: LoginResponse): void {
    this.localStorage.insert(this.localStorage.TEAMANGULAR15_ACCESS_TOKEN, data.tokens);
    this.localStorage.insert(this.localStorage.TEAMANGULAR15_USER, data.user);
    this.router.navigate(["/app"]);
  }

  private failureLogin(): void {
    this.notifier.showNotification("Ha ocurrido un error durante la autenticacion", "error", "danger");
  }
}
