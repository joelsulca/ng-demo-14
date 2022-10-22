import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Client } from '../core/models/clients.model';
import { RootState } from '../domain/store';
import { creationClientAction, editClientAction, getClientsAction, deleteClientAction } from '../domain/store/client/client.actions';
import * as clientSelectors from '../domain/store/client/client.selectors';

@Injectable({ providedIn: 'root' })
export class ClientFacade {
  clients$!: Observable<Client[]>;
  constructor(
    private readonly _store: Store<RootState>
  ) {
    this.clients$ = this._store.select(clientSelectors.selectClients);
  }

  getClients() {
    this._store.dispatch(getClientsAction());
  }

  createClient(client: Client) {
    this._store.dispatch(creationClientAction({ client }))
  }

  editClient(client: Client) {
    this._store.dispatch(editClientAction({ client }))
  }

  deleteClient(client: Client) {
    this._store.dispatch(deleteClientAction({ client}))
  }
}
