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
import { CadastroProfissionalModel, ProfissionalResponseModel } from '../../model/profissional.model';
import { FormsModule } from '@angular/forms';
import { ProfissionaisService } from '../../service/profissionais.service';

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
    FormsModule
  ],
  templateUrl: './crud-form.component.html',
  styleUrl: './crud-form.component.scss'
})
export class CrudFormComponent implements OnInit{
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
  protected profissional: CadastroProfissionalModel = new CadastroProfissionalModel();
  protected isEditar: boolean = false;
  constructor (
    private profissionalService: ProfissionaisService , 
    private router: Router
  ){}
  ngOnInit(): void {
    if (window.localStorage.getItem('editarP')) {
      const value: ProfissionalResponseModel = JSON.parse(window.localStorage.getItem('editarP') as string)
      this.profissional.nome = value.Nome;
      this.profissional.crm = value.CRM;
      this.profissional.contato = value.Contato;
      this.profissional.email = value.Email;
      this.profissional.fimatendimento = value.Fim_Atendimento;
      this.profissional.inicioatendimento = value.Inicio_Atendimento;
      
      
      this.profissional.statuscadastro = value.Status_Cadastro ? true : false;
      this.profissional.datacontratacao = value.Data_Contratacao;
      this.profissional.especialidade = value.Especialidade;
      this.profissional.diasatendimento = `,${value.Dias_Atendimento}`;
    
      const listaDiasAtendimento = value.Dias_Atendimento.split(',')
      listaDiasAtendimento.forEach((dia) => {
        this.daysOfWeek.forEach((day) => {
          if (day.name.toLowerCase() === dia) {
            day.selected = true;
          }
        })
      })
      this.isEditar = true;

      console.log(this.profissional, JSON.parse(window.localStorage.getItem('editarP') as string));

      window.localStorage.clear();
    }
  }
  protected salvarCadastro() : void {
    let value = {...this.profissional};
    value.diasatendimento = value.diasatendimento.replace(',','').toLowerCase();
    
    if(!this.isEditar){
      const dateconverter = value.datacontratacao.toLocaleString("pt-BR", { 
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).split('/');
      value.datacontratacao = `${dateconverter[2]}-${dateconverter[1]}-${dateconverter[0]}`;

      console.log(value);
      this.profissionalService.postCadastrarProfissional(value).subscribe((response) => {
        console.log(response);

        this.router.navigate(['/crud-list']);
      });
    } else {
      console.log(value);
      if (typeof(value.datacontratacao) !== 'string') {
        const dateconverter = value.datacontratacao.toLocaleString("pt-BR", { 
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }).split('/');
        value.datacontratacao = `${dateconverter[2]}-${dateconverter[1]}-${dateconverter[0]}`;
      }
      this.profissionalService.putAtualizarCadastroProfissional(value).subscribe((response) => {
        console.log(response);

        this.router.navigate(['/crud-list']);
      });
    }


  }
  protected setDay($event:any, day:string): void {
    console.log($event, day);
    if ($event.target.checked) {
      this.profissional.diasatendimento = `${this.profissional.diasatendimento},${day.toLowerCase()}`;
    } else {
      this.profissional.diasatendimento = this.profissional.diasatendimento.replace(`,${day.toLowerCase()}`,'');
    }
  }
}
