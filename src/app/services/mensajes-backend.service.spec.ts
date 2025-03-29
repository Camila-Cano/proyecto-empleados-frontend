import { TestBed } from '@angular/core/testing';

import { MensajesBackendService } from './mensajes-backend.service';

describe('MensajesBackendService', () => {
  let service: MensajesBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajesBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
