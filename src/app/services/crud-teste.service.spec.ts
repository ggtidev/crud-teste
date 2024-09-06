import { TestBed } from '@angular/core/testing';

import { CrudTesteService } from './crud-teste.service';

describe('CrudTesteService', () => {
  let service: CrudTesteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudTesteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
