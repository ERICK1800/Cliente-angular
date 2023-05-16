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
  isEditing: boolean = false;

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
    if(this.isEditing){
      this.clientService.update(this.formGroupClient.value).subscribe({
        next: () => {
          this.LoadClient();
          this.formGroupClient.reset();
          this.isEditing = false;
        }
      })
    } else{
      this.clientService.save(this.formGroupClient.value).subscribe({
        next: data => {
          this.clients.push(data);
          this.formGroupClient.reset();
        }
      })
    }
  }

  remove(client: Client): void{
    this.clientService.remove(client).subscribe({
      next: () => this.LoadClient()
    })
  }

  edit(client: Client): void{
    this.formGroupClient.setValue(client);
    this.isEditing = true;
  }
}
