import {Utilizador} from "../../utilizadores/shared/utilizador.model";

export class Consumidor {
    id: number;
    nome: string;
    sexo: string;
    telefone:string;
    email: string;
    password: string;


    constructor(nome: string, sexo: string, telefone: string, email: string, password: string) {
        this.nome = nome;
        this.sexo = sexo;
        this.telefone = telefone;
        this.email = email;
        this.password = password;
    }
}