import { createSelector } from '@ngrx/store';
import { RootState } from '..';
import { ClientState } from './client.state';

export const selectClientFeatureState = (state: RootState) => state.client;

export const selectClients = createSelector(
  selectClientFeatureState,
  (state: ClientState) => state.clients
);
