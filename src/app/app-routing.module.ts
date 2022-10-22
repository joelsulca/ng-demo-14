import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from './core/guards/logged.guard';
import { UnloggedGuard } from './core/guards/unlogged.guard';
import { BaseAuthComponent } from './presentation/layout/base-auth/base-auth.component';
import { BaseLoggedComponent } from './presentation/layout/base-logged/base-logged.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLoggedComponent,
    canActivate: [LoggedGuard],
    children: [
      {
        path: '',
        redirectTo: 'client',
        pathMatch: 'full'
      },
      {
        path: 'client',
        loadChildren: () =>
          import('./presentation/features/client/client.module').then(
            (m) => m.ClientModule
          ),
      },
    ],
  },
  {
    path: 'auth',
    component: BaseAuthComponent,
    canActivate: [UnloggedGuard],
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./presentation/features/auth/login/login.module').then(
            (m) => m.LoginModule
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
