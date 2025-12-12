import { Instrumento } from "./Instrumento";

export class InstrumentoMusical extends Instrumento {
    constructor(id: number, nome: string, tipo: string, quantidade: number) {
        super(id, nome, tipo, quantidade);
    }

    public visualizar(): void {
        super.visualizar();
    }
}