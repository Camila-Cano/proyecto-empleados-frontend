import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { MensajesBackendService } from './services/mensajes-backend.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, NzModalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  isCollapsed = false;
  constructor(private modal: NzModalService,
    private mensajesBackendService: MensajesBackendService
  ) {
    this.mensajesBackendService.subjectExito.subscribe(response => this.mostrarModalExito(response));
    this.mensajesBackendService.subjectError.subscribe(error => this.mostrarModalError(error));
  }

  private mostrarModalExito(response: any): void {
    if(!response) {
      this.modal.info({
        nzTitle: 'Busqueda sin resultados',
        nzContent: 'Empleado no encontrado'
      });
    } else {
      this.modal.success({
        nzTitle: 'Success',
        nzContent: 'Operacion ejecutada con exito'
      });
    }
  }

  private mostrarModalError(response: any): void {
    if(response.status === 400) {
      this.modal.warning({
        nzTitle: 'Datos de usuario invalidos',
        nzContent: response.error.message
      });
    } else {
      this.modal.error({
        nzTitle: 'Error inesperado',
        nzContent: response.error.message
      });
    }
  }

}
