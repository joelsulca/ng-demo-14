import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "src/app/core/models/clients.model";

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private _http: HttpClient) { }

  get(): Observable<Client[]> {
    return this._http.get<Client[]>('clients')
  }
  
  post(client: Client): Observable<Client> {
    return this._http.post<Client>('clients', client)
  }
  
  patch(client: Client): Observable<Client> {
    return this._http.patch<Client>('clients', client)
  }
  
  delete(client: Client): Observable<Client> {
    return this._http.delete<Client>(`clients/${client.id}`);
  }
}