import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Client } from 'src/app/core/models/clients.model';
import { ClientFacade } from 'src/app/facades/client.facade';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit, OnDestroy {
  clients$!: Observable<Client[]>;
  unsubscribe$ = new Subject();
  sizeDialog = {
    width: '50%',
    maxWidth: '800px'
  }

  constructor(public dialog: MatDialog, private _clientFacade: ClientFacade) {
    this.clients$ = this._clientFacade.clients$;
  }

  ngOnInit(): void {
    this._clientFacade.getClients();
  }

  addClient() {
    this.dialog.open(FormComponent, {
      ...this.sizeDialog
    }).afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((client: Client) => {
        if (client) {
          this._clientFacade.createClient(client);
        }
      });
  }

  editClient(client: Client) {
    this.dialog.open(FormComponent, {
      ...this.sizeDialog,
      data: client,
    }).afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((client: Client) => {
        if (client) {
          this._clientFacade.editClient(client);
        }
      });
  }

  deleteClient(client: Client) {
    this._clientFacade.deleteClient(client);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next;
    this.unsubscribe$.complete();
  }
}
