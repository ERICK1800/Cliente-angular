import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  clients: Client[] = [];
  formGroupClient : FormGroup;

  constructor(private clientService: ClienteService, private formBuilder: FormBuilder) {
    this.formGroupClient = formBuilder.group({
      id : [''],
      name : [''],
      email : ['']
    });
  }

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

  save(){
    this.clientService.save(this.formGroupClient.value).subscribe({
      next: data => {
        this.clients.push(data);
        this.formGroupClient.reset();
      }
    })
  }
}
