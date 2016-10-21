import {Utilizador} from "../../utilizadores/shared/utilizador.model";

export class Admin {
    id: number;
    nome: string;
    sexo: string;
    telefone:string;
    utilizador: Utilizador;


    constructor(nome: string, sexo: string, telefone: string, utilizador:Utilizador) {
        this.nome = nome;
        this.sexo = sexo;
        this.telefone = telefone
        this.utilizador = utilizador;
    }
}