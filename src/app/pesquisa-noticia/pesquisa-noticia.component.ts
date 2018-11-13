import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa-noticia',
  templateUrl: './pesquisa-noticia.component.html',
  styleUrls: ['./pesquisa-noticia.component.css']
})
export class PesquisaNoticiaComponent implements OnInit {
  
  noticias$ = null;
  noticiaPesquisada: string;

  constructor(private service: NoticiasService, private router: Router) { }

  ngOnInit() {
  }

  pesquisaNoticia() {
    console.log(this.noticiaPesquisada);
    this.noticias$ = this.service.pesquisaNoticia(this.noticiaPesquisada);
    console.log(this.noticias$);
  }
  
  ordenaNoticia(param) {
    this.noticias$ = this.service.ordenaNoticia(param);
  }

}
