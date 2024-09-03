import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crud-list',
  standalone: true,
  imports: [
    MatTableModule, 
    MatIconModule, 
    MatButtonModule, 
    RouterLink, 
    MatPaginatorModule, 
    MatTooltipModule
  ],
  templateUrl: './crud-list.component.html',
  styleUrl: './crud-list.component.scss'
})
export class CrudListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'specialty', 'crm', 'phone', 'status', 'actions'];
  dataSource = new MatTableDataSource([]);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
