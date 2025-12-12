import { Instrumento } from "../model/Instrumento";

export interface InstrumentoRepository {

    procurarPorNumero(numero: number): Instrumento;
    cadastrar(instrumento: Instrumento): void;
    listarTodos(): void;
    deletar(numero: number): void;
}