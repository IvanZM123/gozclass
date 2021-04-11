// Imports modules.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import {
  SocialAuthServiceConfig,
  SocialLoginModule,
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angularx-social-login";

// Imports environnemts.
import { environment } from "src/environments/environment";

// Imports routes.
import { AppRoutingModule } from './routes/app-routing.module';

// Imports main component.
import { AppComponent } from './bootstrap/app.component';

// Imports modules.
import { HomeModule } from './modules/home/home.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppModule as ProfileModule } from "./modules/app/app.module";

// Imports services.
import { UserService } from './core/services/user/user.service';
import { GroupService } from './core/services/group/group.service';
import { EventService } from './core/services/events/event.service';
import { AuthService } from './core/services/auth/auth.service';
import { UploadService } from './core/services/upload/upload.service';
import { WorkshopsService } from './core/services/workshops/workshops.service';
import { CommunitiesService } from './core/services/communities/communities.service';
import { AuthInterceptorService } from './core/interceptors/auth-interceptor.service';
import { KnowledgeAreaService } from './core/services/knowledgeArea/knowledge-area.service';
import { ContentCreatorsService } from './core/services/contentCreators/content-creators.service';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,

    // Routings
    AppRoutingModule,
    
    // Layouts.
    HomeModule,
    AuthModule,
    ProfileModule,

    // Social login
    SocialLoginModule,

    // Http
    HttpClientModule,

    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.GOOGLE_CLIENT_ID)
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(environment.FACEBOOK_CLIENT_ID)
          }
        ]
      } as SocialAuthServiceConfig,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    AuthService,
    UserService,
    UploadService,
    WorkshopsService,
    ContentCreatorsService,
    CommunitiesService,
    GroupService,
    EventService,
    KnowledgeAreaService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
