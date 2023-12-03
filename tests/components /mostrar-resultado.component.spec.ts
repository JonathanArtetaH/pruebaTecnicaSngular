import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';    
import { MostrarResultadoComponent } from '../../src/app/components/mostrar-resultado/mostrar-resultado.component';

describe('MostrarResultadoComponent', () => {
  
  let component: MostrarResultadoComponent;
  let fixture: ComponentFixture<MostrarResultadoComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MostrarResultadoComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('Creacion de componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  test('Debe coincidir con el snapshot', () => {
    const fixture = TestBed.createComponent(MostrarResultadoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect( compiled ).toMatchSnapshot();
  })

   
});
