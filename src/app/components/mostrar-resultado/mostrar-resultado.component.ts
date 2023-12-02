import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-resultado',
  template: '<h5>Resultado: {{resultado}}</h5>',
  styles: ['']
})
export class MostrarResultadoComponent implements OnInit {
  @Input() resultado: number | null = null; 
  constructor() { }

  ngOnInit(): void {
  }

}
