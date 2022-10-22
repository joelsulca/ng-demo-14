import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArrayObjectToStringPipe } from './pipes/array-object-to-string.pipe';

@NgModule({
  declarations: [ArrayObjectToStringPipe],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ArrayObjectToStringPipe],
  exports: [ArrayObjectToStringPipe]
})
export class CoreModule { }
