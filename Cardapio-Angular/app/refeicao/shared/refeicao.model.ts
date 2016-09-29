import {Tipo_Refeicao} from "../../tipo-refeicao/shared/tipo_refeicao.model";

export class Refeicao {
    id: number;
    nome: string;
    tipo: Tipo_Refeicao;


    constructor(nome: string, tipo: Tipo_Refeicao) {
        this.nome = nome;
        this.tipo = tipo;
    }
}