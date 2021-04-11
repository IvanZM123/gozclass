// Imports modules.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("../modules/home/home.module").then(module => module.HomeModule)
  },
  {
    path: "auth",
    loadChildren: () => import("../modules/auth/auth.module").then(module => module.AuthModule)
  },
  {
    path: "app",
    loadChildren: () => import("../modules/app/app.module").then(module => module.AppModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
