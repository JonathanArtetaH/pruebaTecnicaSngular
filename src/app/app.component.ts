import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaTecnicaSngular';
  numero: number  = 0;
  resultado: number = 0; 

  cambioNumeroEvent = (event: number) => this.numero = event;


  obtenerResultado (event: number){ 
    this.resultado = (!isNaN(event))
    ? event
    : 0 
  }
  

}
