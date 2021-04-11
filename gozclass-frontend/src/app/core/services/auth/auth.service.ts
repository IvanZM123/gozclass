// Imports modules.
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';

// Imports environments.
import { environment } from 'src/environments/environment';

// Imports interfaces.
import { LoginResponse, AuthResponse, AuthTokens, IPayloadRegister, Credentials } from "./interfaces/auth.interfaces";
import { User } from "../user/interfaces/user.interfaces";

// Imports helpers.
import { LocalStorage } from "src/app/core/helpers/LocalStorage";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly url: string = `${ environment.URL }/auth`;
  
  constructor(
    private storage: LocalStorage<User | AuthTokens>,
    private socialAuth: SocialAuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  login(credentials: Credentials): Observable<LoginResponse> {
    const path: string = `${ this.url }/login`;
    return this.http.post<LoginResponse>(path, credentials);
  }

  register(data: IPayloadRegister): Observable<AuthResponse> {
    const path: string = `${ this.url }/register`;
    return this.http.post<AuthResponse>(path, data);
  }

  forgotPassword(email: string): Observable<AuthResponse> {
    const path: string = `${ this.url }/password/forgot`;
    return this.http.post<AuthResponse>(path, { email });
  }

  async signInGoogle(): Promise<Observable<LoginResponse>> {
    const data = await this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID);
    const path: string = `${ this.url }/google`;
    return this.http.post<LoginResponse>(path, { token: data.idToken });
  }

  async signInFacebook(): Promise<Observable<LoginResponse>> {
    const res: SocialUser = await this.socialAuth.signIn(FacebookLoginProvider.PROVIDER_ID);
    const path: string = `${ this.url }/facebook`;
    return this.http.post<LoginResponse>(path, { token: res.authToken });
  }

  get currentUser(): Observable<User> {
    const user = this.storage.get(this.storage.TEAMANGULAR15_USER) as User;
    const path: string = `${ environment.URL }/users/me`;

    if (user) return of(user);

    // Send request to server.
    const res = this.http.get<User>(path);
    res.subscribe(user => {
      this.storage.insert(this.storage.TEAMANGULAR15_USER, user);
    });
    return res;
  }

  changeEmail(email: string, password: string): Observable<object> {
    const path: string = `${ this.url }/email/change`;
    return this.http.post(path, { email, password });
  }

  signOut(): void {
    this.storage.clear();
    this.router.navigate(["/auth/login"]);
  }
}
