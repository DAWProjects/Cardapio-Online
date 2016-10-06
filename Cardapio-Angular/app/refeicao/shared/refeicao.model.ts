import {TipoRefeicao} from "../../tipo-refeicoes/shared/tipo-refeicao.model";

export class Refeicao {
    id: number;
    nome: string;
    tipo: TipoRefeicao;


    constructor(nome: string, tipo: TipoRefeicao) {
        this.nome = nome;
        this.tipo = tipo;
    }
}