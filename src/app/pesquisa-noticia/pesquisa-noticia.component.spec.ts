import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaNoticiaComponent } from './pesquisa-noticia.component';

describe('PesquisaNoticiaComponent', () => {
  let component: PesquisaNoticiaComponent;
  let fixture: ComponentFixture<PesquisaNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
