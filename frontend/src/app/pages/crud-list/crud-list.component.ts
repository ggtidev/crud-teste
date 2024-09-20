import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Professional } from '../../Professional';
import { ProfessionalService } from '../../services/professional.service';
import { Router } from '@angular/router'; 

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
export class CrudListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'specialty', 'crm', 'phone', 'status', 'actions'];
  dataSource = new MatTableDataSource<Professional>([]);

  //construtor para obter os dados dos profissionais
  constructor(private professionalService: ProfessionalService,
    private router: Router
  ) {}

  //o OnInit inicializa e configura dados que serão utilizados
  //método para carregar os dados dos profissionais cadastrados
  ngOnInit(): void {
    this.loadProfessionals();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //método para obter os profissionais cadastrados e adiciona-los a tabela para visualizaçao
  loadProfessionals(): void {
    this.professionalService.getProfessionals().subscribe(professionals =>  {
      this.dataSource.data = professionals;
    });
  }

  //roteia para a página de ediçao/atualizaxçao do profissional
  editProfessional(id: string): void {
    this.router.navigate(['/edit-professional', id]);
  }

  onDelete(professional: Professional): void {
    if (professional._id) { // verifica o id
      if (confirm('Tem certeza que deseja excluir este profissional?')) {
        this.professionalService.deleteProfessional(professional._id).subscribe({
          next: () => {
            this.loadProfessionals(); // atualiza a lista após exclusão
          },
          error: (err) => {
            console.error('Erro ao excluir profissional:', err);
          }
        });
      }
    }
  } 

};
