interface Iuser {
    nome: string;
    usuario: string;
    senha: string;
}

class User implements Iuser {
    nome!: string;
    usuario!: string;
    senha!: string;

    constructor(usuario: string, senha: string) {
        this.usuario = usuario;
        this.senha = senha;
    }
}