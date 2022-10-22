import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { ClientService } from 'src/app/data/services/clients/client.service';

import * as clientActions from './client.actions';

@Injectable()
export class ClientEffects {
  constructor(
    private actions$: Actions,
    private _clientService: ClientService
  ) { }

  getClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientActions.getClientsAction),
      switchMap(() =>
        this._clientService.get().pipe(
          map((clients) =>
            clientActions.successGetClientAction({ clients })
          )
        )
      )
    )
  );

  saveClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientActions.creationClientAction),
      switchMap((action) =>
        this._clientService.post(action.client).pipe(
          map((client) =>
            clientActions.successCreationClientAction({ client })
          ),
          catchError(() =>
            of(
              clientActions.errorCreationClientAction({
                errorMessage: `Ha ocurrido un error al intentar guardar`,
              })
            )
          )
        )
      )
    )
  );

  editClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientActions.editClientAction),
      switchMap((action) =>
        this._clientService.patch(action.client).pipe(
          map((client) =>
            clientActions.successEditClientAction({ client })
          ),
          catchError(() =>
            of(
              clientActions.errorEditClientAction({
                errorMessage: `Ha ocurrido un error al intentar guardar`,
              })
            )
          )
        )
      )
    )
  );

  removeClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientActions.deleteClientAction),
      switchMap((action) =>
        this._clientService.delete(action.client).pipe(
          map((client) =>
            clientActions.successDeleteClientAction({ client: action.client })
          ),
          catchError(() =>
            of(
              clientActions.ErrorDeleteClientAction({
                errorMessage: `Ha ocurrido un error al intentar borrar`,
              })
            )
          )
        )
      )
    )
  );
};
