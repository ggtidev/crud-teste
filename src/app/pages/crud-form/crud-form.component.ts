import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { CrudServiceService } from '../../service/crud-service.service';
import { Professional } from '../../../entity/Professionals';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




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
  ],
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss'],
})
export class CrudFormComponent {
  daysOfWeek = [
    { name: 'Segunda-feira', selected: false },
    { name: 'Terça-feira', selected: false },
    { name: 'Quarta-feira', selected: false },
    { name: 'Quinta-feira', selected: false },
    { name: 'Sexta-feira', selected: false },
    { name: 'Sábado', selected: false },
    { name: 'Domingo', selected: false },
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

  professional: Professional = {
    id: 0,
    nome: '',
    especialidade: '',
    crm: '',
    telefone: '',
    status: true,
    email: '',
    data_contratacao: new Date(),
    hora_inicio_atendimento: '',
    hora_fim_atendimento: '',
    dias_atendimento: '',
  };

  constructor(
    private crudService: CrudServiceService,
    private router: Router
  ) {}

  saveProfessional() {
    this.crudService.addProfessional(this.professional).subscribe(
      (response) => {
        console.log('Profissional adicionado:', response);
        this.router.navigate(['/crud-list']);
      },
      (error) => {
        console.error('Erro ao adicionar profissional:', error);
      }
    );
  }
}

