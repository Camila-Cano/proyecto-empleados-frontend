import { Routes } from '@angular/router';
import {RegistroEmpleadoComponent} from './registro-empleado/registro-empleado.component';
import {OperacionesEmpleadoComponent} from './operaciones-empleado/operaciones-empleado.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'registro-empleado', component: RegistroEmpleadoComponent },
    { path: 'operaciones-empleado', component: OperacionesEmpleadoComponent },
    { path: '**', component: HomeComponent }
];
