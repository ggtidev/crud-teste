import { AfterViewInit, Component } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { CrudTesteService } from '../../services/crud-teste.service';
import { Expertise } from '../../models/expertise';
import { WorkingDay } from '../../models/workingDays';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../models/user';
import { provideNgxMask } from 'ngx-mask';

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
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: './crud-form.component.html',
  styleUrl: './crud-form.component.scss',
  providers: [CrudTesteService, provideNgxMask()],
})
export class CrudFormComponent implements AfterViewInit {
  id: number = 0;
  routeType: string = '';
  form = new FormGroup<any>({
    name: new FormControl('', Validators.required),
    password: new FormControl('password'),
    expertise_id: new FormControl<WorkingDay | null>(null, Validators.required),
    crm: new FormControl('', Validators.required),
    phone_number: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    hiring_date: new FormControl('', Validators.required),
    start_service: new FormControl('', Validators.required),
    end_service: new FormControl('', Validators.required),
    status: new FormControl(true, Validators.required),
    working_days: new FormControl<WorkingDay[]>([]),
  });
  daysOfWeek: WorkingDay[] = [];
  expertises: Expertise[] = [];

  constructor(
    private crudService: CrudTesteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.routeType = this.route.snapshot.data['type'];

    this.getExpertises();
    this.getWorkingDays();
    this.verifyIsShowOrUpdate();
  }

  getExpertises() {
    this.crudService.getExpertises().subscribe((data: any) => {
      if (data.success) {
        this.expertises = data.expertises;
      }
    });
  }

  getWorkingDays() {
    this.crudService.getWorkingDays().subscribe((data: any) => {
      if (data.success) {
        this.daysOfWeek = data.working_days;
      }
    });
  }

  verifyIsShowOrUpdate() {
    if (this.routeType === 'show') {
      this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0');

      this.crudService.getUser(this.id).subscribe((data: any) => {
        console.log(data.user);

        this.setFormValues(data.user);
      });

      this.disableFormControls();
    }

    if (this.routeType === 'edit') {
      this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0');

      this.crudService.getUser(this.id).subscribe((data: any) => {
        this.setFormValues(data.user);
      });
    }
  }

  setFormValues(user: User) {
    this.form.patchValue({
      name: user.name,
      expertise_id: user.expertise.id,
      crm: user.crm,
      phone_number: user.phone_number,
      email: user.email,
      hiring_date: user.hiring_date,
      start_service: user.start_service,
      end_service: user.end_service,
      status: user.status,
      working_days: user.working_days?.map((day: WorkingDay) => day.id),
    });
  }

  disableFormControls() {
    Object.keys(this.form.controls).forEach((key) => {
      const control = this.form.get(key);
      if (control) {
        control.disable();
      }
    });
  }

  onSubmit() {
    console.log(this.form.value);

    if (this.form.valid) {
      if (this.routeType === 'edit') {
        this.crudService
          .updateUser(this.form.value, this.id)
          .subscribe((data: any) => {
            console.log(data);

            if (data.success) {
              this.router.navigate(['/crud-list']);
            }
          });

        return;
      }

      this.crudService.storeUser(this.form.value).subscribe((data: any) => {
        console.log(data);

        if (data.success) {
          this.router.navigate(['/crud-list']);
        }
      });
    } else {
      console.log('Formulário inválido');
    }
  }
}
