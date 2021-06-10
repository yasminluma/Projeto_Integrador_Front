import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProdutoComponent } from './produto/produto.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { SomosComponent } from './somos/somos.component';

const routes: Routes = [

  {path:'', redirectTo: 'entrar', pathMatch:'full'},
  
  {path:'entrar',component: EntrarComponent},
  {path:'cadastrar',component:CadastrarComponent},
  {path:'inicio',component:InicioComponent},
  
  {path: 'minha-conta',component:MinhaContaComponent},
  {path:'somos',component:SomosComponent},
  {path:'produto/:id',component:ProdutoComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
