import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProfessionalService } from '../services/professional.service';
import { Professional } from '../Professional';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-prof-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule
  ],
  templateUrl: './prof-details.component.html',
  styleUrls: ['./prof-details.component.scss'],
})

export class ProfDetailsComponent implements OnInit {
  professional!: Professional;

  constructor(
    private route: ActivatedRoute,
    private professionalService: ProfessionalService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //instancia do angular router que permite acesar os parametros e informaçoes da rota ativa
    if (id) {
      this.professionalService.getProfessionalDetails(id).subscribe( //verifica se o id é valido e mostra os detalhes do profissional de id especificado
        (data) => (this.professional = data),
        (error) => console.error(error)
      );
    }
  }
}