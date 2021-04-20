// Imports modules.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("src/app/modules/home/home.module").then(module => module.HomeModule)
  },
  {
    path: "auth",
    loadChildren: () => import("src/app/modules/auth/auth.module").then(module => module.AuthModule)
  },
  {
    path: "app",
    loadChildren: () => import("src/app/modules/app/app.module").then(module => module.AppModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
