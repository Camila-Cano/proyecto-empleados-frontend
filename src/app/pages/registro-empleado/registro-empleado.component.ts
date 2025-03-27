import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {FormGroup, FormControl} from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-registro-empleado',
  imports: [ NzInputModule, NzButtonModule, NzFormModule, ReactiveFormsModule, NzDatePickerModule],
  templateUrl: './registro-empleado.component.html',
  styleUrl: './registro-empleado.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistroEmpleadoComponent {

  formulario = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    documentoIdentidad: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    fechaNacimiento: new FormControl('')
  });

  handleChange(info: any): void {

    const reader = new FileReader();
    reader.readAsDataURL(info.files[0]);
    const result = reader.result;
    console.log(result);
  }

  onSubmit() {
    console.log(this.formulario.value);
    // this.formulario.reset()
  }

}
