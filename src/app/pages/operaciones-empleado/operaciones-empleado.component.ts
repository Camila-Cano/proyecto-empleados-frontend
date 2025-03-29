import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormGroup, FormControl } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { EmpleadoService } from '../../services/empleado.service';
import { MensajesBackendService } from '../../services/mensajes-backend.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-operaciones-empleado',
  imports: [NzInputModule, NzButtonModule, NzFormModule, ReactiveFormsModule, NzDatePickerModule, CommonModule],
  templateUrl: './operaciones-empleado.component.html',
  styleUrl: './operaciones-empleado.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OperacionesEmpleadoComponent {

  constructor(private empleadoService: EmpleadoService,
    private mensajesBackendService: MensajesBackendService,
    private route: ActivatedRoute
  ) { }

  mostrarFormulario = false;
  operacion = "";
  formulario = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    documentoIdentidad: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    fechaNacimiento: new FormControl('')
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.operacion = params['operacion'];
      console.log(this.operacion)
    });
  }

  consultarEmpleado() {
    const documentoIdentidad = this.formulario.value.documentoIdentidad;
    this.empleadoService.consultarEmpleado(documentoIdentidad).subscribe(
      {
        next: resp => {
          this.mensajesBackendService.subjectExito.next(resp);
          this.cargarDatosFormulario(resp);
        },
        error: err => {
          this.mensajesBackendService.subjectError.next(err);
        }
      }
    );
  }

  cargarDatosFormulario(response: any) {
    if (!response) {
      this.mostrarFormulario = false;
      return;
    }
    this.mostrarFormulario = true;
    this.formulario.setValue(response);
  }

  editarEmpleado() {
    this.empleadoService.actualizarEmpleado(this.formulario.value).subscribe(
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

  eliminarEmpleado() {
    const documentoIdentidad = this.formulario.value.documentoIdentidad;
    this.empleadoService.eliminarEmpleado(documentoIdentidad).subscribe(
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
