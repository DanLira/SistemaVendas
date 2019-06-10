import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaFabricanteComponent } from './pesquisa-fabricante.component';

describe('PesquisaFabricanteComponent', () => {
  let component: PesquisaFabricanteComponent;
  let fixture: ComponentFixture<PesquisaFabricanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaFabricanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaFabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
