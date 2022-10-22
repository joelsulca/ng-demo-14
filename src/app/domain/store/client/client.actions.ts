import { createAction, props } from '@ngrx/store';
import { Client } from 'src/app/core/models/clients.model';

export const getClientsAction = createAction('[Client] GetClientsAction');
export const successGetClientAction = createAction(
  '[Client]SuccessClientsAction',
  props<{ clients: Client[] }>()
);
export const creationClientAction = createAction(
  '[Client]CreationClientAction',
  props<{ client: Client }>()
);
export const successCreationClientAction = createAction(
  '[Client]SuccessCreationClientsAction',
  props<{ client: Client }>()
);
export const errorCreationClientAction = createAction(
  '[Client]ErrorCreationClientAction',
  props<{ errorMessage: string }>()
);
export const editClientAction = createAction(
  '[Client]EditClientAction',
  props<{ client: Client }>()
);
export const successEditClientAction = createAction(
  '[Client]SuccessEditClientAction',
  props<{ client: Client }>()
);
export const errorEditClientAction = createAction(
  '[Client]ErrorEditClientAction',
  props<{ errorMessage: string }>()
);
export const deleteClientAction = createAction(
  '[Client]DeleteClientAction',
  props<{ client: Client }>()
);
export const successDeleteClientAction = createAction(
  '[Client]SuccessDeleteClientAction',
  props<{ client: Client }>()
);
export const ErrorDeleteClientAction = createAction(
  '[Client]ErrorDeleteClientAction',
  props<{ errorMessage: string }>()
);