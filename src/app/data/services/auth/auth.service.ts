import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, UserResponse } from 'src/app/core/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(data: Login): Observable<UserResponse> {
    return this._http.post<UserResponse>('auth/local', data);
  }
}
