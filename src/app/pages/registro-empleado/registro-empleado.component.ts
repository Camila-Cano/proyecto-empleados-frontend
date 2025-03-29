import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {FormGroup, FormControl} from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { EmpleadoService } from '../../services/empleado.service';
import { MensajesBackendService } from '../../services/mensajes-backend.service';

@Component({
  selector: 'app-registro-empleado',
  imports: [ NzInputModule, NzButtonModule, NzFormModule, ReactiveFormsModule, NzDatePickerModule],
  templateUrl: './registro-empleado.component.html',
  styleUrl: './registro-empleado.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistroEmpleadoComponent {

  constructor(private empleadoService: EmpleadoService,
    private mensajesBackendService: MensajesBackendService
  ) {}

  formulario = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    documentoIdentidad: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    fechaNacimiento: new FormControl('')
  });

  onSubmit() {
    this.empleadoService.registrarEmpleado(this.formulario.value).subscribe(
      {
        next: resp => {
          this.mensajesBackendService.subjectExito.next(resp);
          this.formulario.reset();
        },
        error: err => {
          this.mensajesBackendService.subjectError.next(err);
        }
      }
    );
  }

}
