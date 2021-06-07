import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
<<<<<<< HEAD
import { InicioComponent } from './inicio/inicio.component';
import { ProdutoComponent } from './produto/produto.component';
import { ChatGeralComponent } from './chat-geral/chat-geral.component';
=======
import { HomeComponent } from './home/home.component';
import { SomosComponent } from './somos/somos.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';

>>>>>>> 21a2d2a9e2477f67b870f26c9a6ddfacab59ee48

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
<<<<<<< HEAD
    InicioComponent,
    ProdutoComponent,
    ChatGeralComponent
=======
    HomeComponent,
<<<<<<< HEAD
    SomosComponent,
    MinhaContaComponent
=======
    SomosComponent
>>>>>>> 21a2d2a9e2477f67b870f26c9a6ddfacab59ee48
>>>>>>> 58716dbb7a185cbb30ce4dde984f57f41d0a9d3c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
