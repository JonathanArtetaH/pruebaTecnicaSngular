import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';   
import { AppComponent } from '../src/app/app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  
  test('Creacion del componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  test('Debe coincidir con el snapshot', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect( compiled ).toMatchSnapshot();
  })

});
