import {Estado_Restaurante} from "../../estado-restaurante/shared/estado_restaurante.model";
import {Utilizador} from "../../utilizador/shared/utilizador.model";
import {Refeicao} from "../../refeicao/shared/refeicao.model";

export class Restaurante {
    id: number;
    nome: string;
    telefone: number;
    cidade: string;
    av_rua: string;
    numero: number;
    card_img: string;
    logo: string;
    email: string;
    lat: number;
    long: number;
    estado: Estado_Restaurante;
    utilizador: Utilizador;
    refeicaos: Refeicao[];


    constructor(nome: string, numero: number, telefone: number, email: string, av_rua: string, card_img: string, logo: string, estado: Estado_Restaurante, lat:number, long:number, utilizador:Utilizador) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.av_rua = av_rua;
        this.numero = numero;
        this.card_img = card_img;
        this.logo = logo;
        this.lat = lat;
        this.estado = estado
        this.utilizador = utilizador;
    }
}