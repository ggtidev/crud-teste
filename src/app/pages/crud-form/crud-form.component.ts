import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfissionalService, Profissional } from '../../services/profissional.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crud-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss']
})

export class CrudFormComponent implements OnInit {
  profissional: Profissional = {
    name: '',
    specialty: '',
    crm: '',
    phone: '',
    status: '',
    email: '',
    hiringDate: '', 
    startTime: '', 
    endTime: ''
  };
  
  isEdit: boolean = false;

  daysOfWeek = [
    { name: 'Segunda-feira' },
    { name: 'Terça-feira' },
    { name: 'Quarta-feira' },
    { name: 'Quinta-feira' },
    { name: 'Sexta-feira' },
    { name: 'Sábado' },
    { name: 'Domingo' },
  ];

  specialties = [
    { especialidade: 'Pediatria' },
    { especialidade: 'Ginecologia' },
    { especialidade: 'Obstetrícia' },
    { especialidade: 'Neurologia' },
    { especialidade: 'Cardiologia' },
    { especialidade: 'Ortopedia' },
    { especialidade: 'Dermatologia' },
    { especialidade: 'Oftalmologia' },
    { especialidade: 'Psiquiatria' },
    { especialidade: 'Endocrinologia' },
    { especialidade: 'Gastroenterologia' },
    { especialidade: 'Urologia' },
    { especialidade: 'Pneumologia' },
    { especialidade: 'Nefrologia' },
    { especialidade: 'Hematologia' },
    { especialidade: 'Reumatologia' },
    { especialidade: 'Infectologia' },
    { especialidade: 'Otorrinolaringologia' }
];


  constructor(
    private profissionalService: ProfissionalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.profissionalService.getProfissionais().subscribe((data) => {
        this.profissional = data.find((p) => p.id === +id)!; 
      });
    }
  }

  save(): void {
    console.log(this.profissional); //funciona
    if (this.isEdit) {
      this.profissionalService.updateProfissional(this.profissional.id!, this.profissional).subscribe(() => {
        this.router.navigate(['/crud-list']);
      });
    } else {
      this.profissionalService.createProfissional(this.profissional).subscribe(() => {
        this.router.navigate(['/crud-list']);
      });
    }
  }
}
