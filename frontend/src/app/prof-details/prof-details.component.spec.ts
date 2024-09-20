import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfDetailsComponent } from './prof-details.component';

describe('ProfDetailsComponent', () => {
  let component: ProfDetailsComponent;
  let fixture: ComponentFixture<ProfDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
