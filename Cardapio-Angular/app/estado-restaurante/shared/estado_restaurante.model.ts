export class Estado_Restaurante {
    id: number;
    designacao: string;
    descricao: string;


    constructor(designacao: string, descricao: string) {
        this.designacao = designacao;
        this.descricao = descricao;
    }

}