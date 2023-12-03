import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { MostrarResultadoComponent } from './mostrar-resultado/mostrar-resultado.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    FormularioComponent,
    OperacionesComponent,
    MostrarResultadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,   
  ],
  exports: [
    FormularioComponent,
    OperacionesComponent,
    MostrarResultadoComponent 
  ], 
})
export class ComponentsModule { }
