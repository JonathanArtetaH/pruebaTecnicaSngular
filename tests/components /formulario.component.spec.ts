import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';    
import { FormularioComponent } from '../../src/app/components/formulario/formulario.component';

describe('FormularioComponent', () => {
  
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FormularioComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('Creacion de componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  test('Debe coincidir con el snapshot', () => {
    const fixture = TestBed.createComponent(FormularioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect( compiled ).toMatchSnapshot();
  })

   
});
