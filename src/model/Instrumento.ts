export abstract class Instrumento {

    private _nome: string;
    private _id: number;
    private _categoria: string;
    private _quantidade: number;
    
    

    constructor(id: number, nome: string, categoria: string, quantidade: number) {
        this._id = id;
        this._nome = nome;
        this._categoria = categoria;
        this._quantidade = quantidade;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get id () {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get categoria() {
        return this._categoria;
    }

    public set categoria(categoria: string) {
        this._categoria = categoria;
    }

    public get quantidade() {
        return this._quantidade;
    }

    public set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }

    public visualizar(): void {

        let categoria: string = "";

        switch (this._categoria.toLowerCase()) { 
            case "cordas":
                categoria = "Cordas";
                break;
            case "sopro":
                categoria = "Sopro";
                break;
            case "percusão":
                categoria = "Percusão";
                break;
                
            default:
                categoria = this._categoria; 
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do instrumento");
        console.log("*****************************************************");
        console.log("Nome do Instrumento: " + this._nome);
        console.log("Tipo do instrumento: " + this._categoria);
        console.log("ID do instrumento " + this._id);
        console.log("Quantidade em estoque: " + this._quantidade);
        console.log("*****************************************************");
        

    }

}