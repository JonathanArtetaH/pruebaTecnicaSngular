import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-mostrar-resultado',
  template: `
  <h3>Resultado es: {{resultado}}</h3> 
  <p *ngIf="resultado!=0">serie ({{numeroInput}}): ( 2primo({{numeroInput}}-2) ) * ( 3triangular({{numeroInput}}-2) ) * ( 7fibonacci({{numeroInput}}-1) )</p>
  `,
  styles: ['']
})

export class MostrarResultadoComponent {
  @Input() resultado: number = 0; 
  @Input() numeroInput: number = 0;  

}
