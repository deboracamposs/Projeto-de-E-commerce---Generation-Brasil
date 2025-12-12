import { Instrumento } from "../model/Instrumento";
import { InstrumentoRepository } from "../repository/InstrumentoRepository";
import { colors } from "../util/Colors";

export class InstrumentoController implements InstrumentoRepository {
    procurarPorNumero(numero: number): Instrumento {
        throw new Error("Method not implemented.");
    }
    listarTodos(): void {
        throw new Error("Method not implemented.");
    }
    

    private listaInstrumentos: Array<Instrumento> = new Array<Instrumento>();
    numero: number = 0;

    listarTodas(): void {
    if (this.listaInstrumentos.length === 0) {
        console.log(colors.fg.red, "\nO estoque está vazio!\n", colors.reset);
        return;
    }

    for (let instrumento of this.listaInstrumentos) {
        instrumento.visualizar();
    }
}

    buscarPorNumero(numero: number): void {
        let buscaInstrumento = this.buscarNoArray(numero);
        if (buscaInstrumento != null){
            buscaInstrumento.visualizar();
        }else
            console.log(colors.fg.red, "\nO Instrumento numero: " + numero + " não foi encontrado!", colors.reset);
    }
    
    cadastrar(instrumento: Instrumento): void {
        this.listaInstrumentos.push(instrumento);
        console.log(colors.fg.green, "\nO Instrumento número: " + instrumento.id + " foi cadastrado com sucesso!\n", colors.reset);
    }

    deletar(numero: number): void {
        let buscaInstrumento = this.buscarNoArray(numero);
        
        if (buscaInstrumento != null){
            this.listaInstrumentos.splice(this.listaInstrumentos.indexOf(buscaInstrumento), 1);
            console.log(colors.fg.green, `\nO Instrumento número: ${numero} foi deletado com sucesso!\n`, colors.reset);
        }else{
            console.log(colors.fg.red,"\nO Instrumento numero: " + numero + " não foi encontrado!\n", colors.reset);
         }
    }

    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Instrumento | null {

        for (let instrumento of this.listaInstrumentos) {
            if (instrumento.id === numero){
                return instrumento;
            } 
        }
        return null;
    }
}
