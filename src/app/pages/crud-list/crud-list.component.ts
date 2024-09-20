import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, Router } from '@angular/router';
import { CrudServiceService } from '../../service/crud-service.service';
import { Professional } from '../../../entity/Professionals';
import { CommonModule } from '@angular/common';

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
    CommonModule,
  ],
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss'],
})
export class CrudListComponent implements AfterViewInit {
  professinals: Professional[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'name',
    'specialty',
    'crm',
    'phone',
    'status',
    'actions',
  ];
  dataSource = new MatTableDataSource<Professional>([]);

  constructor(
    private crudService: CrudServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProfessionals();
  }

  loadProfessionals() {
    this.crudService.getProfessionals().subscribe((data) => {
      this.dataSource.data = data;
      console.log(data);
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteProfessional(id: number) {
    this.crudService.deleteProfessional(id).subscribe(
      () => {
        this.dataSource.data = this.dataSource.data.filter(
          (prof) => prof.id !== id
        );
        console.log('Profissional excluído com sucesso');
      },
      (error) => {
        console.error('Erro ao excluir profissional:', error);
      }
    );
  }

  editProfessional(id: number) {
    this.router.navigate(['/crud-form', id]);
  }

  viewProfessional(id: number) {
    // Implemente a lógica para visualizar detalhes, se necessário
    this.router.navigate(['/professional-detail', id]);
  }
}
