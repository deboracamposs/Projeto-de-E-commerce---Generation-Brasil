import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Instrumento } from "./src/model/Instrumento";
import { InstrumentoController } from "./src/controller/InstrumentoController";
import { InstrumentoMusical } from "./src/model/InstrumentoMusical";


export function main() {

    let instrumentos: InstrumentoController = new InstrumentoController();

    let opcao, numero: number;

    console.log("\n1======== Selecione uma das opções abaixo para começar seu cadastro ========\n");


    while (true) {

        console.log(colors.bg.black, colors.fg.bluestrong, 
                    "=====================================================");
        console.log("                                                     ");
        console.log("          GENERATION MUSIC STORE  🎸🥁🎶🎹         "); 
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("            [1] - CADASTRAR INSTRUMENTO             ");
        console.log("            [2] - LISTAR TODOS OS INSTRUMENTOS      ");
        console.log("            [3] - BUSCAR INSTRUMENTO PELO ID        ");
        console.log("            [4] - DELETAR INSTRUMENTO               ");
        console.log("            [0] - Sair                              ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ", colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.greenstrong, "\nGENERATION MUSIC STORE - A procura da SUA batida perfeita");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1: {
                console.log(colors.fg.whitestrong, "\nCADASTRAR INSTRUMENTO\n", colors.reset);
                
                console.log("Nome do instrumento: ");
                let nome = readlinesync.question("");

                console.log("Tipo de instrumento: ");
                let tipo = readlinesync.question("");

                console.log("Quantidade em estoque: ");
                let quantidade = readlinesync.questionInt("");

                instrumentos.cadastrar(new InstrumentoMusical(instrumentos.gerarNumero(), nome, tipo, quantidade)); 
                
                keyPress()
                break;
            }
            case 2:
                console.log(colors.fg.whitestrong, "\nLISTAR TODOS OS INSTRUMENTOS\n", colors.reset);
                
            
                instrumentos.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\nBUSCAR INSTRUMENTO PELO ID\n", colors.reset);

                console.log("ID do instrumento: ");
                numero = readlinesync.questionInt("");
                instrumentos.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\nDELETAR INSTRUMENTO\n", colors.reset);

                console.log("Digite o ID do instrumento para deletar: ");
                numero = readlinesync.questionInt("");
                instrumentos.deletar(numero); 

                keyPress()
                break;
            
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("A Generation Music Store agradece sua participação!")
    console.log ("                                                    ")
    console.log("=====================================================");
    console.log("Projeto Desenvolvido por: Débora Campos");
    console.log("Generation Brasil - deborac@genstudents.org");
    console.log("Portifólio:https://github.com/deboracamposs");
    console.log("=====================================================");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();