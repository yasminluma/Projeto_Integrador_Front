import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { ProdutoComponent } from './produto/produto.component';
import { SomosComponent } from './somos/somos.component';

const routes: Routes = [

  {path:'', redirectTo: 'entrar', pathMatch:'full'},
  
  {path:'entrar',component: EntrarComponent},
  {path:'cadastrar',component:CadastrarComponent},
  {path:'inicio',component:InicioComponent},
  {path: 'minha-conta',component:MinhaContaComponent},
  {path:'categoria', component: CategoriaComponent},
  {path:'somos',component:SomosComponent},
  {path:'produto/:id',component:ProdutoComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
