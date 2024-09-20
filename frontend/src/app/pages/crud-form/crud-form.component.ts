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
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray, AbstractControl  } from '@angular/forms';
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
  isEditMode = false;
  professionalId?: string;

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
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      specialty: ['', Validators.required],
      crm: ['', [Validators.required, this.crmValidator]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]],
      email: ['', [Validators.required, Validators.email]],
      hiringDate: ['',  [Validators.required, this.dateValidator]],
      consultationStartTime: ['', this.timeFormatValidator],
      consultationEndTime: ['', this.timeFormatValidator],
      status: [true],
      daysOfWeek: this.fb.array(this.daysOfWeek.map(() => this.fb.control(false))), 
    });
  }

  ngOnInit(): void {
    this.professionalId = this.route.snapshot.paramMap.get('id')  || undefined; //instancia do angular router que permite acesar os parametros e informaçoes da rota ativa
    if (this.professionalId) {
        this.isEditMode = true;
        this.professionalService.getProfessionalDetails(this.professionalId).subscribe(data => {
            this.form.patchValue(data); // reescreve os dados do profissional
        });
    }
  }

  //validaçao do crm. de 4 a 6 dígitos + /UF no final
  crmValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const crmPattern = /^[0-9]{4,6}\/[A-Z]{2}$/; 
  return crmPattern.test(control.value) ? null : { invalidCRM: true };
}

  //validação para nao colocar uma data de contratação futura
  dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const hiringDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); //sem horas, minutos e segs
    return hiringDate > today ? { 'futureDate': true } : null;
  }

  //validaçao dos horários de consulta 
  timeFormatValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (!value) { //aceita vazio já que é opcional
      return null;
    }
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timePattern.test(value) ? null : { invalidTimeFormat: true }; // erro se o formato tiver inválido
  }

  //metodo para transformar em array reconhecido pelo angular
  get daysOfWeekArray() {
    return this.form.get('daysOfWeek') as FormArray;
  }

  onSubmit() {
    if (this.form.valid) {
      const professional: Professional = {
        ...this.form.value, //cria um novo profissional
        daysOfWeek: this.daysOfWeekArray.controls // iteração entre os checkboxes marcados para incluí-los no objeto profissional
          .map((control: any, i: number) => (control.value ? this.daysOfWeek[i].name : null))
          .filter((v: string | null) => v !== null)
      };
      
      //logica para ir à pagina de ediçao ou criação de perfil do profissional (depende do botao que foi clicado)
      if (this.isEditMode) { 
        this.professionalService.updateProfessional({ ...professional, _id: this.professionalId }).subscribe({
            next: () => this.router.navigate(['/crud-list']),
            error: (err) => console.error('Erro ao atualizar profissional:', err)
        });
      } else {
        this.professionalService.createProfessional(professional).subscribe({ 
          next: () => this.router.navigate(['/crud-list']),
          error: (err) => console.error('Erro ao cadastrar profissional:', err)
        });
      }
    }
  }
}
