import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from '../../ccomponent/pop-up/pop-up.component';

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
    MatDialogModule
  ],
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss']
})
export class CrudListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'specialty', 'crm', 'phone', 'status', 'actions'];
  dataSource = new MatTableDataSource([
    { id: 1, name: 'leoa', specialty: 'Clinico', crm: 'CRM/PE123456', phone: "(81) 985970461", status: 'Ativo' },
  ]);

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    this.dialog.open(PopUpComponent, {
      width: '36rem',
      height: '36rem',
      data: { name: 'leonardo', specialty: 'Clinico', crm: 'CRM/PE123456', email:'leonardo@ssoos',phone: "(81) 985970461", status: true, date_contract:"11/08/2000",start_service:"13:54", end_service:"15:45",day_service:['seg','ter','quar'] } 
    });
  }
}
