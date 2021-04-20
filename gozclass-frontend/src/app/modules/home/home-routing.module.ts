// Imports modules.
import { RouterModule, Route } from "@angular/router";
import { NgModule } from "@angular/core";

// Import layout
import { HomeLayoutComponent } from "./layout/home-layout.component";

// Imports pages.
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { TermsPageComponent } from "./pages/terms-page/terms-page.component";
import { PrivacyPageComponent } from "./pages/privacy-page/privacy-page.component";

const routes: Array<Route> = [
    {
        path: "",
        component: HomeLayoutComponent,
        children: [
            {
                path: "",
                component: HomePageComponent
            },
            {
                path: "terms",
                component: TermsPageComponent
            },
            {
                path: "privacy",
                component: PrivacyPageComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class HomeRouting {}