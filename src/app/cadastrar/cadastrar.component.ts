import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

let email = document.querySelector('#email')
let emailOK= false


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
        alert('As senhas tem que ser iguais')
      } else {
        this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
          this.user = resp
          this.router.navigate(['/entrar'])
          alert('Usuário cadastrado com sucesso!')
        })
      }
      validaEmail() {
        let txtEmail = document.querySelector('#email')
        if(email.value.indexOf('@') == -1 || email.value.indexOf('.') ==-1 ) {
            txtEmail.innerHTML = 'E-mail invalido'
            txtEmail.style.color = 'red'
        } else {
            txtEmail.innerHTML = 'E-mail valido'
            txtEmail.style.color = 'green'
            emailOK = true
      
    }

}
