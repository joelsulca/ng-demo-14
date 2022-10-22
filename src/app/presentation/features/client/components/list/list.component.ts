import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { Client } from "src/app/core/models/clients.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements AfterViewInit {
  @ViewChild(MatTable) tableClients!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;
  @Output() onEdit: EventEmitter<Client> = new EventEmitter<Client>();
  @Output() onDelete: EventEmitter<Client> = new EventEmitter<Client>();
  @Input()
  set clients(clients: Client[] | any) {
    this.dataSource.data = clients;
  }

  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'languages', 'creationDate', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Client>;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  editClient(client: Client) {
    this.onEdit.emit(client);
  }

  deleteClient(client: Client) {
    this.onDelete.emit(client);
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}