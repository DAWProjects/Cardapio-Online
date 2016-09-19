/**
 * Created by bernardo on 9/17/16.
 */
export class Estado_Refeicao {
    id: number;
    designacao: string;
    descricao: string;


    constructor(designacao: string, descricao: string) {
        this.designacao = designacao;
        this.descricao = descricao;
    }

}