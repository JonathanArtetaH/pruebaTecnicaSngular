import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  template: '', 
})
export class OperacionesComponent {
  @Output() resultadoNumero = new EventEmitter<number>();
  @Input() numeroInput: number  = 0;  
  resultado : number =0; 


  ngOnChanges(changes: SimpleChanges) {  
    if (changes['numeroInput']){ 
      Promise.resolve().then(()=> this.realizarOperacionSerie())
    } 
  }

realizarOperacionSerie(){ 
  let resultadoNumPrimo = this.calcularNumeroPrimo(this.numeroInput) 
  let resultadoTriangular = this.obtenerTriangular(this.numeroInput)
  let resultadoNumFibonacci = this.calcularNumeroFibonacci(this.numeroInput) 

  this.resultado  = this.caculcarSeriesNum(resultadoNumPrimo,resultadoTriangular,resultadoNumFibonacci) 
  this.emitirResultNumero()
  
}


caculcarSeriesNum(numPrimo: number, numTriangular: number, numFibonacci: number){ 
  // console.log('Num primo: ',numPrimo,'\nNum triangular:',numTriangular,'\nNum fibo:' ,numFibonacci) 
  return  ( 2 * numPrimo ) * ( 3 * numTriangular ) * ( 7 * numFibonacci );  
}

// empieza calcular fibonacci
calcularNumeroFibonacci(n: number){
  let resultRestNum = n -1;
  if(resultRestNum == 0) return 0; 

  let resultFun = 0;
  let numFunUno = 0;
  let numFunDos = 1;

  for (let i = 2; i <= resultRestNum; i++) {
    resultFun = numFunUno + numFunDos;
    numFunUno = numFunDos;
    numFunDos = resultFun;    
  }

  return resultFun;
}
// termina calcular fobinacci

// Empieza calcular numero primo
calcularNumeroPrimo(n: number) {  
  let numeroTotal = n - 2;
  let i = 2;
  let arraNumsPrimos = [];
  if(numeroTotal<2) return 0; 
   while (arraNumsPrimos.length < numeroTotal) { 
      if (this.esPrimo(i)) arraNumsPrimos.push(i);
      i++;
  }
  return arraNumsPrimos[numeroTotal - 1];
}

esPrimo(num: number) {  
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; 
  }
  return num > 1;
}
// termina calcular numero primo


// empieza calcular triangular
obtenerTriangular(n: number) { 
  let numRestado = (n - 2 );
  if(numRestado >=1  ) return ( numRestado * ( numRestado +1 ) ) / 2 
  return 0;
} 
// termina calcular triangular
 
emitirResultNumero(){
    this.resultadoNumero.emit(this.resultado);
}
 
}
