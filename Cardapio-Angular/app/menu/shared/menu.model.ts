import {Restaurante} from "../../restaurantes/shared/restaurante.model";
import {Refeicao} from "../../refeicoes/shared/refeicao.model";

export class Menu {
    id: number;
    descricao: string;
    preco: number;
    hora_inicio: any;
    hora_fim: any;
    imagem: string;
    refeicao: Refeicao;
    restaurante: Restaurante;


    constructor(descricao: string, imagem: string, preco: number, hora_inicio: any, hora_fim: any, restaurante: Restaurante, refeicao:Refeicao) {
        this.descricao = descricao;
        this.preco = preco;
        this.hora_inicio = hora_inicio;
        this.hora_fim = hora_fim;
        this.imagem = imagem;
        this.refeicao = refeicao;
        this.restaurante = restaurante;
    }
}