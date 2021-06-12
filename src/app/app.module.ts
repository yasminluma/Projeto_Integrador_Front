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
import { InicioComponent } from './inicio/inicio.component';
import { ProdutoComponent } from './produto/produto.component';
import { ChatGeralComponent } from './chat-geral/chat-geral.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { SomosComponent } from './somos/somos.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { FrutaComponent } from './fruta/fruta.component';
import { LegumesComponent } from './legumes/legumes.component';
import { VerdurasComponent } from './verduras/verduras.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    ProdutoComponent,
    ChatGeralComponent,
    SomosComponent,
    FrutaComponent,

    MinhaContaComponent,
    SomosComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent,
    FrutaComponent,
    LegumesComponent,
    VerdurasComponent

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
