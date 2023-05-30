import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = "http://localhost:8080/clients";

  constructor(private http: HttpClient) { }

  getClient(): Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  }

  save(cliente: Client): Observable<Client>{
    return this.http.post<Client>(this.url, cliente);
  }

  remove(cliente: Client): Observable<void>{
    return this.http.delete<void>(this.url + "/" + cliente.id);
  }

  update(cliente: Client): Observable<Client>{
    return this.http.put<Client>(this.url + "/" + cliente.id, cliente);
  }
}
