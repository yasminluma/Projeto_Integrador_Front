import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]

  constructor(
    private router: Router,
    private categoriaService: CategoriaService

  ) { }

  ngOnInit() {
    if (environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.findAllCategorias()

  }

  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  organico(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      alert ('Produto orgânico cadastrado com sucesso!')
      this.findAllCategorias()
      this.categoria = new Categoria()
    })

  }

  industrial(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      alert ('Produto industrial cadastrado com sucesso!')
      this.findAllCategorias()
      this.categoria = new Categoria()
    })

  }

}
