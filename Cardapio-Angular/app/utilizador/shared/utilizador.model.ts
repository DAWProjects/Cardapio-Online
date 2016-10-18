/**
 * Created by bernardo on 9/18/16.
 */

export class Utilizador {
    id: number;
    username: string;
    email: string;
    senha:string;


    constructor(username: string, email: string, senha:string) {
        this.username = username;
        this.email = email;
        this.senha = senha;
    }
}