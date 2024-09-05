import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { CrudTesteService } from '../../services/crud-teste.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-crud-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    MatPaginatorModule,
    MatTooltipModule,
    HttpClientModule,
  ],
  templateUrl: './crud-list.component.html',
  styleUrl: './crud-list.component.scss',
  providers: [CrudTesteService],
})
export class CrudListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = [
    'name',
    'expertise',
    'crm',
    'phone_number',
    'status',
    'actions',
  ];

  constructor(private crudService: CrudTesteService) {}

  ngAfterViewInit() {
    this.getUsers();
    this.dataSource.paginator = this.paginator;
  }

  getUsers() {
    this.crudService.getUsers().subscribe((data: any) => {
      if (data.success) {
        this.dataSource.data = data.user;
      }
    });
  }

  deleteUserById(id: number) {
    this.crudService.deleteUser(id).subscribe((data: any) => {
      if (data.success) {
        this.getUsers();
      }
    });
  }
}
