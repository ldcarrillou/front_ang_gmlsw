import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [ClientComponent, AppComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  private clients: Client[] | undefined;
  constructor(private http: HttpClient, private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((data: Client[]) => {
      console.log(data);
      this.clients = data;
    });
  }

}
