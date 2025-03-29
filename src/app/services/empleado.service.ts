import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private urlBase = 'http://localhost:8080/proyecto-empleados/';

  constructor(private http: HttpClient) { }

  registrarEmpleado(formulario: any): Observable<any> {
    return this.http.post(this.urlBase.concat('crear'), formulario);
  }

  consultarEmpleado(documentoIdentidad: any): Observable<any> {
    return this.http.get(this.urlBase.concat(documentoIdentidad));
  }

  eliminarEmpleado(documentoIdentidad: any): Observable<any> {
    return this.http.delete(this.urlBase.concat(documentoIdentidad));
  }

  actualizarEmpleado(formulario: any): Observable<any> {
    return this.http.put(this.urlBase.concat('actualizar'), formulario);
  }

}
