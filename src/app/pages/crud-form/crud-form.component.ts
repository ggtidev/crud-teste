import { Component, OnInit  } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DoctorService } from '../../services/doctor-service';
import { DoctorModel } from '../../models/DoctorModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-crud-form',
  standalone: true,
  imports: [
    RouterLink, 
    MatInputModule, 
    MatFormFieldModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule, 
    MatRadioModule, 
    MatCheckboxModule,
    MatIconModule, 
    MatButtonModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './crud-form.component.html',
  styleUrl: './crud-form.component.scss',
  providers:[DoctorService]
})
export class CrudFormComponent  implements OnInit{

  idUsuario!: number;
  isEditUrl = true;

  daysOfWeek = [
    { name: 'Segunda-feira '},
    { name: 'Terça-feira '},
    { name: 'Quarta-feira '},
    { name: 'Quinta-feira '},
    { name: 'Sexta-feira '},
    { name: 'Sábado '},
    { name: 'Domingo '},
  ];

  specialties = [
    { especialidade: 'Pediatria' },
    { especialidade: 'Ginecologia' },
    { especialidade: 'Obstetrícia' },
    { especialidade: 'Neonatologia' },
    { especialidade: 'Endocrinologia Pediátrica' },
    { especialidade: 'Nutrição Infantil' },
    { especialidade: 'Genética Pediátrica' },
    { especialidade: 'Alergologia Pediátrica' },
  ];

  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private route: ActivatedRoute,
  ){}

  doctor: DoctorModel = {
    id: 0,
    name: '',
    email: '',
    crm: '',
    speciality:'',
    status: '',
    contact: '',
    createAt: new Date(),
    updatedAt: new Date(),
    startService: '',
    endService: '',
    daysOfWeek: []
  }

  createDoctor() {
    this.doctorService.createDoctor(this.doctor).subscribe(
      (response) => {
        this.router.navigate(['/crud-list'])
      },
      (error) => {
      }
    )
  }

  getDoctorById(id: number){
    this.doctorService.getDoctorById(id).subscribe((resp: DoctorModel)=>{
      this.doctor = resp
    })    
  }

  ngOnInit(){
    if(window.location.pathname.includes('view') || window.location.pathname.includes('edit')){
      this.idUsuario = this.route.snapshot.params['id']
      this.getDoctorById(this.idUsuario)
    }
    this.isEditUrl = window.location.pathname.includes('view');
  }

  updateDoctor(){
    this.doctorService.updateDoctor(this.doctor).subscribe(
      (response) => {
        this.router.navigate(['/crud-list'])
      }
    )
  }

  createOrUpdateDoctor(){
    if(this.doctor.id != 0){
      this.updateDoctor()
    }else{
      this.createDoctor()
    }
  }

  setDaysOfWeek($event:any, day:string){
    if ($event.target.checked) {
      this.doctor.daysOfWeek.push(day);
    } else {
      this.removeDay(this.doctor.daysOfWeek, day);
    }
  }

  removeDay(daysList: string[], day: string): void{
    for (let i = daysList.length - 1; i >= 0; i--) {
      if (daysList[i] === day) {
        daysList.splice(i, 1);
      }
    }
  }
}
