export class Estado_Refeicao {
    id: number;
    designacao: string;
    descricao: string;


    constructor(designacao: string, descricao: string) {
        this.designacao = designacao;
        this.descricao = descricao;
    }

}