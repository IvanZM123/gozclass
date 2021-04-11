// Imports modules.
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Import routing.
import { AppRouting } from "./app-routing.module";

// Import layout
import { AppLayoutComponent } from './layout/app-layout.component';

// Imports pages.
import { AppPageComponent } from "./pages/app-page/app-page.component";
import { ComunitiesPageComponent } from "./pages/comunities-page/comunities-page.component";
import { CreatorsContentPageComponent } from "./pages/creators-content-page/creators-content-page.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { UserSettingsPageComponent } from "./pages/user-settings-page/user-settings-page.component";
import { WorkshopsPageComponent } from "./pages/workshops-page/workshops-page.component";

// Imports components.
import { BadgeCardComponent } from "./components/badge-card/badge-card.component";
import { CardContentCreatorComponent } from "./components/card-content-creator/card-content-creator.component";
import { CarouselCreatorsContentComponent } from "./components/carousel-creators-content/carousel-creators-content.component";
import { CarouselSponsorsComponent } from "./components/carousel-sponsors/carousel-sponsors.component";
import { CounterComponent } from "./components/counter/counter.component";
import { CredentialsModalComponent } from "./components/credentials-modal/credentials-modal.component";
import { DangerZoneComponent } from "./components/danger-zone/danger-zone.component";
import { DetailsUserSectionComponent } from "./components/details-user-section/details-user-section.component";
import { EventCardComponent } from "./components/event-card/event-card.component";
import { GeneralStickerComponent } from "./components/general-sticker/general-sticker.component";
import { GeneralStickerSectionComponent } from "./components/general-sticker-section/general-sticker-section.component";
import { GroupCardComponent } from "./components/group-card/group-card.component";
import { GroupsContainerComponent } from "./components/groups-container/groups-container.component";
import { GroupsSectionComponent } from "./components/groups-section/groups-section.component";
import { ModalFileUploadComponent } from "./components/modal-file-upload/modal-file-upload.component";
import { NavbarAppComponent } from "./components/navbar-app/navbar-app.component";
import { ProfileSectionsComponent } from "./components/profile-sections/profile-sections.component";
import { UserFieldsFormComponent } from "./components/user-fields-form/user-fields-form.component";
import { UserPresentationComponent } from "./components/user-presentation/user-presentation.component";
import { UserStickerComponent } from "./components/user-sticker/user-sticker.component";
import { WelcomeBannerComponent } from "./components/welcome-banner/welcome-banner.component";
import { WorkshopCardComponent } from "./components/workshop-card/workshop-card.component";
import { WorkshopSectionComponent } from "./components/workshop-section/workshop-section.component";
import { ModalMessageComponent } from "src/app/core/components/modal-message/modal-message.component";
import { NotificationComponent } from "src/app/core/components/notification/notification.component";

// Import material.
import { AngularMaterial } from "src/app/core/material/AngularMaterial";
import { CarouselModule } from "ngx-owl-carousel-o";

@NgModule({
    declarations: [
        AppLayoutComponent,
        AppPageComponent,
        ComunitiesPageComponent,
        CreatorsContentPageComponent,
        ProfilePageComponent,
        UserSettingsPageComponent,
        WorkshopsPageComponent,
        BadgeCardComponent,
        CardContentCreatorComponent,
        CarouselCreatorsContentComponent,
        CarouselSponsorsComponent,
        CounterComponent,
        CredentialsModalComponent,
        DangerZoneComponent,
        DetailsUserSectionComponent,
        EventCardComponent,
        GeneralStickerComponent,
        GeneralStickerSectionComponent,
        GroupCardComponent,
        GroupsContainerComponent,
        GroupsSectionComponent,
        ModalFileUploadComponent,
        NavbarAppComponent,
        ProfileSectionsComponent,
        UserFieldsFormComponent,
        UserPresentationComponent,
        UserStickerComponent,
        WelcomeBannerComponent,
        WorkshopCardComponent,
        WorkshopSectionComponent,
        ModalMessageComponent,
        NotificationComponent
    ],
    imports: [
        ReactiveFormsModule,
        AngularMaterial,
        CommonModule,
        AppRouting,
        CarouselModule
    ]
})
export class AppModule {}