/**
 * Created by bernardo on 9/18/16.
 */

import {Restaurante} from "../../restaurantes/shared/restaurante.model";
import {Refeicao} from "../../refeicoes/shared/refeicao.model";

export class Menu {
    id: number;
    descricao: string;
    preco: number;
    hora_inicio: any;
    hora_fim: any;
    imagem: string;
    refeicao_id: number;
    restaurante_id: number;


    constructor(descricao: string, imagem: string, preco: number, hora_inicio: any, hora_fim: any, restaurante: number, refeicao:number) {
        this.descricao = descricao;
        this.preco = preco;
        this.hora_inicio = hora_inicio;
        this.hora_fim = hora_fim;
        this.imagem = imagem;
        this.refeicao_id = refeicao;
        this.restaurante_id = restaurante;
    }
}