import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProfessionalService } from '../services/professional.service';
import { Professional } from '../Professional';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prof-details',
  standalone: true,
  imports: [
    CommonModule,
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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.professionalService.getProfessionalDetails(id).subscribe(
        (data) => (this.professional = data),
        (error) => console.error(error)
      );
    }
  }
}