import { Instrumento } from "../model/Instrumento";

export interface InstrumentoRepository {
    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(instrumento: Instrumento): void;
    atualizar(instrumento: Instrumento): void;
    deletar(numero: number): void;
}