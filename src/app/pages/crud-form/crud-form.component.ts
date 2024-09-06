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
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  ],
  templateUrl: './crud-form.component.html',
  styleUrl: './crud-form.component.scss'
})
export class CrudFormComponent implements OnInit {

  form: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder){

    this.form = this.formBuilder.group({
      name: [null,[Validators.required]],
      crm:  [null,[Validators.required]],
      specialty: [null,[Validators.required]],
      phone: [null],
      email:[null,[Validators.required, Validators.email]],
      contract_date:[null],
      start_service:[null],
      end_service:[null],
      status:[null,[Validators.required]],
      day_service:this.formBuilder.array([]),
    });   
  }

  ngOnInit() {
    const currentTime = new Date().toTimeString().substring(0, 5);
    this.form.patchValue({
      startService: currentTime
    });
  }
  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }


  
  daysOfWeek = [
    { name: 'SEG' },
    { name: 'TER' },
    { name: 'QUA' },
    { name: 'QUI' },
    { name: 'SEX' },
    { name: 'SAB' },
    { name: 'DOM' },
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
}
