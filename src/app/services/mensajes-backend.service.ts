import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesBackendService {

  constructor() { }

  subjectExito = new Subject<any>();
  subjectError = new Subject<any>();
}
