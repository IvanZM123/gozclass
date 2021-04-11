// Import module.
import { NgModule } from "@angular/core";

// Import routes
import { HomeRouting } from "./home-routing.module";

// Import layout.
import { HomeLayoutComponent } from './layout/home-layout.component';

// Imports pages.
import { HomePageComponent } from "./pages/home-page/home-page.component";

// Import component.
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AngularMaterial } from "src/app/core/material/AngularMaterial";

@NgModule({
    declarations: [
        HomeLayoutComponent,
        HomePageComponent,
        NavbarComponent
    ],
    imports: [
        HomeRouting,
        AngularMaterial
    ]
})
export class HomeModule {}