  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
return this.http.post<UserLogin>('https://projefas.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user : Usuario):Observable<Usuario> {
    return this.http.post<Usuario>('https://projefas.herokuapp.com/usuarios/cadastrar', user)
  }

  logado(){
    let ok = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
}
