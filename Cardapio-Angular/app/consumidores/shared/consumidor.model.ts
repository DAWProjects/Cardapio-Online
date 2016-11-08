import {Utilizador} from "../../utilizadores/shared/utilizador.model";

export class Consumidor {
    id: number;
    nome: string;
    sexo: string;
    telefone:string;


    constructor(nome: string, sexo: string, telefone: string) {
        this.nome = nome;
        this.sexo = sexo;
        this.telefone = telefone;
    }
}