import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alert.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  usuario: Usuario = new Usuario()

  constructor(
    private router:Router,
    private alertas:AlertasService,
  ) { }

  ngOnInit( ){
    window.scroll(0,0)
    if(environment.token==''){
      this.alertas.showAlertDanger('Sua sessão expirou,faça o login novamente')
      this.router.navigate(['/entrar'])
    }
  }

  publicar(){

  }
  
}
