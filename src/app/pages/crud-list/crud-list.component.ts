import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { ProfissionalService, Profissional } from '../../services/profissional.service';
import { CrudFormComponent } from '../crud-form/crud-form.component'; 
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog.component'; // Certifique-se de que este componente está criado e importado corretamente
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


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
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss']
})
export class CrudListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'specialty', 'crm', 'phone', 'status', 'actions'];
  dataSource = new MatTableDataSource<Profissional>([]);

  constructor(
    private profissionalService: ProfissionalService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {}

  ngAfterViewInit() {
    this.getProfissionais();
  }

  getProfissionais(): void {
    this.profissionalService.getProfissionais().subscribe((data: Profissional[]) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.cdr.detectChanges();
    });
  }

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '400px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteProfissional(id);
      }
    });
  }

  deleteProfissional(id: number): void {
    this.profissionalService.deleteProfissional(id).subscribe(() => {
      this.getProfissionais();
    });
  }

  openCrudForm(id?: number): void {
    const dialogRef = this.dialog.open(CrudFormComponent, {
      width: '60vw',
      height: '70vh',
      data: { id: id || null },
      backdropClass: 'blurred-backdrop' 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getProfissionais();
      }
    });
  }

  


  toggleDarkTheme() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    }
  }
}
