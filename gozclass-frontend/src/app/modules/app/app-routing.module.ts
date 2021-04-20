// Import module.
import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";

// Import layout.
import { AppLayoutComponent } from "./layout/app-layout.component";

// Imports pages.
import { AppPageComponent } from "./pages/app-page/app-page.component";
import { ComunitiesPageComponent } from "./pages/comunities-page/comunities-page.component";
import { CreatorsContentPageComponent } from "./pages/creators-content-page/creators-content-page.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { UserSettingsPageComponent } from "./pages/user-settings-page/user-settings-page.component";
import { WorkshopsPageComponent } from "./pages/workshops-page/workshops-page.component";

const routes: Array<Route> = [
    {
        path: "",
        component: AppLayoutComponent,
        children: [
            {
                path: "",
                canActivate: [AuthGuard],
                component: AppPageComponent
            },
            {
                path: "profile",
                canActivate: [AuthGuard],
                component: ProfilePageComponent
            },
            {
                path: "settings",
                canActivate: [AuthGuard],
                component: UserSettingsPageComponent
            },
            {
                path: "workshops",
                canActivate: [AuthGuard],
                component: WorkshopsPageComponent
            },
            {
                path: "communities",
                canActivate: [AuthGuard],
                component: ComunitiesPageComponent
            },
            {
                path: "creatorsContent",
                canActivate: [AuthGuard],
                component: CreatorsContentPageComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AppRouting {}