import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { ProfissionaisService } from '../../service/profissionais.service';
import { ProfissionalResponseModel } from '../../model/profissional.model';
import { NgFor } from '@angular/common';

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
    NgFor
  ],
  templateUrl: './crud-list.component.html',
  styleUrl: './crud-list.component.scss'
})
export class CrudListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'specialty', 'crm', 'phone', 'status', 'actions'];
  dataSource!: MatTableDataSource<ProfissionalResponseModel>;
  protected profissionais: ProfissionalResponseModel[] = [];
  constructor(
    private profissionalService: ProfissionaisService,
    private router: Router
  ){
    this.dataSource = new MatTableDataSource<ProfissionalResponseModel>();
  }
  ngOnInit(): void {
    this.profissionalService.getListaProfissionais().subscribe((response: { profissionais :ProfissionalResponseModel[]}) => {
      console.log(response);
      this.dataSource.data = response.profissionais;
      this.profissionais = response.profissionais;
    });
    this.dataSource.paginator = this.paginator;
  }
  protected apagarProfissional(profissional: ProfissionalResponseModel): void {
    console.log(profissional);
    this.profissionalService.deleteApagaProfissional(profissional.CRM).subscribe((response) => {
      console.log(response);
      window.location.reload();
    });
  }
  protected editProfissional(profissional: ProfissionalResponseModel) : void {
    window.localStorage.setItem('editarP', JSON.stringify(profissional));
    this.router.navigate(['/crud-form']);
  }
}
