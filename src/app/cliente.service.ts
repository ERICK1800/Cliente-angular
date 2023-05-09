import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = "http://localhost:3000/clients";

  constructor(private http: HttpClient) { }

  getClient(): Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  }

  save(cliente: Client): Observable<Client>{
    return this.http.post<Client>(this.url, cliente);
  }
}
