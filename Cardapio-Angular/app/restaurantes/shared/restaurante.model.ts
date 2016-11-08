import {Estado_Restaurante} from "../../estado-restaurante/shared/estado_restaurante.model";
import {Utilizador} from "../../utilizadores/shared/utilizador.model";
import {Refeicao} from "../../refeicoes/shared/refeicao.model";

export class Restaurante {

    id: number;
    nome: string;
    telefone: number;
    cidade: string;
    av_rua: string;
    numero: number;
    lat: number;
    long: number;
    logo: string;
    imagem: string;
    estado: number;
    utilizador: number;
    refeicaos: Refeicao[];


    constructor(nome: string, telefone: number, cidade: string, av_rua: string, numero: number, lat: number, long: number,  logo: string, imagem: string, estado: number,  utilizador: number) {
        this.nome = nome;
        this.telefone = telefone;
        this.cidade = cidade;
        this.av_rua = av_rua;
        this.numero = numero;
        this.lat = lat;
        this.long = long;
        this.logo = logo;
        this.imagem = imagem;
        this.estado = estado;
        this.utilizador = utilizador;
    }
}