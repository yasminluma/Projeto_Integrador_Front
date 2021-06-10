import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  usuario: Usuario = new Usuario()

  constructor(

  ) { }

  ngOnInit( ){
    window.scroll(0,0)
  }

  publicar(){

  }
  
}
