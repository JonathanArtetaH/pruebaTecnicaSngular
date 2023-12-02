import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-resultado',
  template: '<h5>Resultado: {{resultado}}</h5>',
  styles: ['']
})
export class MostrarResultadoComponent implements OnInit {

  resultado: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
