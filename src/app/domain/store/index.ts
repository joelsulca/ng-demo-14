import { AuthEffects } from './auth/auth.effects';
import { authReducer } from './auth/auth.reducer';
import { AuthState } from './auth/auth.state';
import { ClientEffects } from './client/client.effects';
import { clientReducer } from './client/client.reducer';
import { ClientState } from './client/client.state';

export interface RootState {
  auth: AuthState;
  client: ClientState;
}

export const appReducer = {
  auth: authReducer,
  client: clientReducer,
};

export const appEffects = [AuthEffects, ClientEffects];
