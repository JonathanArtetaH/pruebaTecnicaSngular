import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  template: '',
  styles: ['']
})
export class OperacionesComponent {
  @Output() resultadoNumero = new EventEmitter<number>();
  @Input() numeroInput: number | null = null; 
  
  ngOnChanges() {
    console.log('Cambio...', this.numeroInput)
  }

  

}
