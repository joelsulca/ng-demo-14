import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './presentation/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appEffects, appReducer } from './domain/store';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptorService } from './core/interceptors/app.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CoreModule,
    LayoutModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
