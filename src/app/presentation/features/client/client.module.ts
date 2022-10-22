import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    ClientComponent,
    FilterComponent,
    AddButtonComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ClientRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ]
})
export class ClientModule { }
