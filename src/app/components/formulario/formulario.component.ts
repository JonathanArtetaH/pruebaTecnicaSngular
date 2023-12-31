import { Component, EventEmitter, OnInit, Output } from '@angular/core'; 
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [''],
})
export class FormularioComponent { 
 
  numero: number = 0;
  @Output() nuevoNumeroEvent = new EventEmitter<number>();
 
  emitirCambioValor() {  
    this.nuevoNumeroEvent.emit(this.numero);
  }

  isInvalidNumber(){
    const regex = /^-?[0-9]\d*$/;
    return !regex.test(String(this.numero));
  }

}
