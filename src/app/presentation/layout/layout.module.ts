import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LogoComponent } from './components/logo/logo.component';
import { BaseLoggedComponent } from './base-logged/base-logged.component';
import { BaseAuthComponent } from './base-auth/base-auth.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SidenavComponent,
    LogoComponent,
    BaseLoggedComponent,
    BaseAuthComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
})
export class LayoutModule {}
