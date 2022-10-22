import { formatDate } from "@angular/common";
import { Component, Inject, LOCALE_ID, ViewChild } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client, Language } from "src/app/core/models/clients.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @ViewChild('ngFormRef') ngFormRef!: FormGroupDirective;
  title = 'Nuevo cliente';
  clientForm!: FormGroup;
  languages: Language[] = [
    { id: 1, name: 'Español', color: 'warn' },
    { id: 2, name: 'Ingles', color: 'primary' },
    { id: 3, name: 'Frances', color: 'warn' },
    { id: 4, name: 'Portugues', color: 'primary' },
    { id: 5, name: 'Aleman', color: 'accent' },
  ];

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    @Inject(MAT_DIALOG_DATA) private dataClient: Client,
    private _fb: FormBuilder,
    public dialog: MatDialogRef<Client>) {
    if (this.dataClient) {
      this.title = 'Editar cliente';
    }

    this.initForm(dataClient);
  }

  initForm(client: Client) {
    this.clientForm = this._fb.group({
      firstName: new FormControl(client?.firstName || null, [Validators.required]),
      lastName: new FormControl(client?.lastName || null, [Validators.required]),
      age: new FormControl(client?.age || null, [Validators.required]),
      languages: this._fb.array([]),
      creationDate: new FormControl(client?.firstName || null)
    })
  }

  get languagesFormArray() {
    return this.clientForm.get('languages') as FormArray;
  }

  updateCheckboxLanguage(language: any, isChecked?: boolean) {
    const checkArray = <FormArray>this.clientForm.get('languages');
    if (isChecked) {
      checkArray.push(new FormControl(language));
    } else {
      let idx = checkArray.controls.findIndex(x => x.value == language.id);
      checkArray.removeAt(idx);
    }
  }

  saveData(event: Event) {
    this.ngFormRef.onSubmit(event);
    if (this.clientForm.valid) {
      const formClientRawValue: Client = this.clientForm.getRawValue();
      formClientRawValue.id = this.dataClient?.id || Date.now();
      formClientRawValue.creationDate = this.getFormatCreationDate();
      this.dialog.close(formClientRawValue);
    }
  }

  getFormatCreationDate() {
    return this.dataClient?.creationDate || formatDate(new Date(), 'MM-dd-yy', this.locale);
  }
}

