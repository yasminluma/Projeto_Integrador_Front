import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  user: Usuario = new Usuario
  idUser: number
  tipoUsuario: string


  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    window.scroll(0,0)


  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome = ''
    environment.id = 0
  }

}
