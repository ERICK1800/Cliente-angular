import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClient(): Observable<Client[]>{
    let url = "http://localhost:3000/clients";
    return this.http.get<Client[]>(url);
  }
}
