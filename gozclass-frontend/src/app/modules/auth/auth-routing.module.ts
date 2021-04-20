// Imports modules.
import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";

// Import layout.
import { AuthLayoutComponent } from "./layouts/auth-layout.component";

// Imports pages.
import { ForgotPasswordPageComponent } from "./pages/forgot-password-page/forgot-password-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";

export const routes: Array<Route> = [
    {
        path: "",
        component: AuthLayoutComponent,
        children: [
            {
                path: "register",
                component: RegisterPageComponent
            },
            {
                path: "login",
                component: LoginPageComponent
            },
            {
                path: "forgotPassword",
                component: ForgotPasswordPageComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AuthRouting {}
