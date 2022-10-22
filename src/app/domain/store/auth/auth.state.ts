import { Login } from 'src/app/core/models/auth.model';

export interface AuthState {
  loginData: Login | null;
  isLoading: boolean;
  isError: string | null;
}
