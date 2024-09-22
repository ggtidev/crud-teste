import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { DoctorService } from '../../services/doctor-service';
import { DoctorModel } from '../../models/DoctorModel';
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
    HttpClientModule
  ],
  templateUrl: './crud-list.component.html',
  styleUrl: './crud-list.component.scss',
  providers:[DoctorService]
})
export class CrudListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'speciality', 'crm', 'contact', 'status', 'actions'];
  dataSource = new MatTableDataSource<DoctorModel>([]);

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ){}

  ngAfterViewInit() {
    this.getAllDoctors()
    this.dataSource.paginator = this.paginator;
  }

  getAllDoctors(): void {
    this.doctorService.getAllDoctors().subscribe( doctors => {
        this.dataSource.data = doctors;
    });
  }

  deleteDoctorById(id: number) {
    this.doctorService.deleteDoctor(id).subscribe((data: any) => {
      if (data.success) {
        this.getAllDoctors();
      }
    });
  }

  editProfessional(id: number) {
    this.router.navigate(['/crud-form', id]);
  }
}
