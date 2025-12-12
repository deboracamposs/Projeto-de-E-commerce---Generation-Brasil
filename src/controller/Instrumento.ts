export class Instrumento {
    public numero: number;
    public nome: string;
    public tipo: string;

    constructor(numero: number, nome: string, tipo: string) {
        this.numero = numero;
        this.nome = nome;
        this.tipo = tipo;
    }

    public visualizar(): void {
        console.log("\n\n*****************************************************");
        console.log("Dados do Instrumento 🎶");
        console.log("*****************************************************");
        console.log("Nome do Instrumento: " + this.nome);
        console.log("Tipo do Instrumento: " + this.tipo);
        console.log("Numero do Instrumento: " + this.numero);
        
    }
}