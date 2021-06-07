import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';

const routes: Routes = [

  {path:'', redirectTo: 'entrar', pathMatch:'full'},
  
  {path:'entrar',component: EntrarComponent},
  {path:'cadastrar',component:CadastrarComponent},
  {path:'home',component:HomeComponent},
  {path: 'minha-conta',component:MinhaContaComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
