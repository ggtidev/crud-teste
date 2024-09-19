import { Professional } from './../../Professional';
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfessionalService } from '../../services/professional.service';

@Component({
  selector: 'app-crud-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink, 
    MatInputModule, 
    MatFormFieldModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule, 
    MatRadioModule, 
    MatCheckboxModule, 
    MatIconModule, 
    MatButtonModule
  ],
  templateUrl: './crud-form.component.html',
  styleUrl: './crud-form.component.scss'
})
export class CrudFormComponent implements OnInit {
  form: FormGroup; 

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
    { especialidade: 'Neonatologia' },
    { especialidade: 'Endocrinologia Pediátrica' },
    { especialidade: 'Nutrição Infantil' },
    { especialidade: 'Genética Pediátrica' },
    { especialidade: 'Alergologia Pediátrica' },
  ];


  constructor(
    private fb: FormBuilder,
    private professionalService: ProfessionalService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      specialty: ['', Validators.required],
      crm: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      hiringDate: [''],
      consultationStartTime: [''],
      consultationEndTime: [''],
      status: [true],
      daysOfWeek: this.fb.array(this.daysOfWeek.map(() => this.fb.control(false))), 
    });
  }

  ngOnInit(): void {}

  //metodo para transformar em array reconhecido pelo angular
  get daysOfWeekArray() {
    return this.form.get('daysOfWeek') as FormArray;
  }

  onSubmit() {
    if (this.form.valid) {
      const professional: Professional = {
        ...this.form.value,
        daysOfWeek: this.daysOfWeekArray.controls
          .map((control: any, i: number) => (control.value ? this.daysOfWeek[i].name : null))
          .filter((v: string | null) => v !== null)
      };
      
      this.professionalService.createProfessional(professional).subscribe({
        next: () => this.router.navigate(['/crud-list']),
        error: (err) => console.error('Erro ao cadastrar profissional:', err)
      });
    }
  }
}
