import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

user:Usuario=new Usuario
confirmarSenha:string


  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  confirmSenha(event: any){
    this.confirmarSenha= event.target.value
    }
    cadastrar(){
      if (this.user.senha != this.confirmarSenha) {
        alert('As senhas devem ser iguais')
      } else {
        this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
          this.user = resp
          this.router.navigate(['/entrar'])
          alert('Usuário cadastrado com sucesso!')
        })
      }
    }

}
