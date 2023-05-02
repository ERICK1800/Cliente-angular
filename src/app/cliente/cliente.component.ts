import { Component, OnInit } from '@angular/core';
import { Client } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  clients: Client[] = [];

  constructor(private clientService: ClienteService){}

  ngOnInit(): void {
    this.LoadClient();
  }

  LoadClient(){
    this.clientService.getClient().subscribe(
    {
      next: data => this.clients = data,
      error: msg => console.log("Erro ao chamar o endpont " + msg)
    });
  }

}
