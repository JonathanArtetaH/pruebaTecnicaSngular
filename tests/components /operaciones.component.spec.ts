import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';    
import { OperacionesComponent } from '../../src/app/components/operaciones/operaciones.component';

describe('OperacionesComponent', () => {
  
  let component: OperacionesComponent;
  let fixture: ComponentFixture<OperacionesComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        OperacionesComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('Creacion de componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  test('Debe coincidir con el snapshot', () => {
    const fixture = TestBed.createComponent(OperacionesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect( compiled ).toMatchSnapshot();
  })
   
});
