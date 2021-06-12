import { Mensagem } from "./Mensagem"
import { Produto } from "./Produto"

export class Usuario{
    public id : number
    public nome: string
    public email: string
    public senha: string
    public produtos: Produto[]
    public mensagemRecebida: Mensagem[]
    public mensagemEnviada: Mensagem[]
<<<<<<< HEAD
    public celular:number
=======
    public tipo: string
>>>>>>> 39d73c93844bcd25d47bd390d3531357a31d3bd0
}