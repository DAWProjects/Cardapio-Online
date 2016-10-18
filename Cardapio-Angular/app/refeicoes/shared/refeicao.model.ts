/**
 * Created by bernardo on 9/18/16.
 */
import {TipoRefeicao} from "../../tipo-refeicoes/shared/tipo-refeicao.model";

export class Refeicao {
    id: number;
    nome: string;
    tipo_id: number;


    constructor(nome: string, tipo: number) {
        this.nome = nome;
        this.tipo_id = tipo;
    }
}