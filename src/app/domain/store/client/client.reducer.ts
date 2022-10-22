import { createReducer, on, Action } from '@ngrx/store';
import * as clientActions from './client.actions';
import { ClientState } from './client.state';

export const initialState: ClientState = {
  clients: []
};

const clientReducerInternal = createReducer(
  initialState,
  on(clientActions.successGetClientAction, (state, { clients }) => ({
    ...state,
    clients,
  })),
  on(clientActions.successCreationClientAction, (state, { client }) => ({
    ...state,
    clients: [...state.clients, client],
  })),
  on(clientActions.successEditClientAction, (state, { client }) => ({
    ...state,
    clients: state.clients.map((data) =>
      data.id === client.id ? { ...client } : data
    )
  })),
  on(clientActions.successDeleteClientAction, (state, { client }) => ({
    ...state,
    clients: state.clients.filter((data) => data.id !== client.id)
  })),
)
export function clientReducer(state: ClientState | undefined, action: Action) {
  return clientReducerInternal(state, action);
}
