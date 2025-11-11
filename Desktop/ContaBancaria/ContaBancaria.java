import java.text.DecimalFormat;
import java.util.Scanner;

public class ContaBancaria {

    public static void main(String[] args) {
        // Dados iniciais do cliente
        String nomeCliente = "Paulo Silveira";
        String tipoConta = "Corrente";
        double saldo = 2500.00;
        int opcao = 0;

        // Classe para formatação de números, útil para exibir moedas.
        DecimalFormat df = new DecimalFormat("#,##0.00");

        // Classe para ler a entrada do usuário
        Scanner leitura = new Scanner(System.in);

        // --- 1. CABEÇALHO INICIAL ---
        String dadosCliente = """
                ***************************************
                Dados iniciais do Cliente:

                Nome:            %s
                Tipo da Conta:   %s
                Saldo Inicial:   R$%s
                ***************************************
                """.formatted(nomeCliente, tipoConta, df.format(saldo));

        System.out.println(dadosCliente);

        // --- MENU DE OPERAÇÕES ---
        String menu = """
                ** Digite sua opção **
                1 - Consultar saldo
                2 - Transferir valor (Saída)
                3 - Receber valor (Depósito)
                4 - Sair
                """;

        // Loop principal que mantém o menu ativo
        while (opcao != 4) {
            System.out.println(menu);
            
            // Tenta ler a opção do usuário. Se não for um número, trata o erro.
            try {
                opcao = leitura.nextInt();
            } catch (Exception e) {
                // Limpa o buffer de entrada em caso de erro (ex: usuário digita texto)
                leitura.next(); 
                opcao = 0; // Força a entrar no case default (Opção inválida)
            }


            switch (opcao) {
                case 1:
                    // 1 - Consultar Saldo
                    System.out.println("O saldo atual é: R$" + df.format(saldo));
                    break;

                case 2:
                    // 2 - Transferir Valor (Saída)
                    System.out.println("Qual valor você deseja transferir?");
                    double valorSaque = leitura.nextDouble();

                    if (valorSaque > saldo) {
                        System.out.println("Saldo insuficiente para realizar a transferência.");
                    } else if (valorSaque <= 0) {
                        System.out.println("Valor inválido. A transferência deve ser maior que zero.");
                    } else {
                        saldo -= valorSaque; // Reduz o saldo
                        System.out.println("Transferência de R$" + df.format(valorSaque) + " realizada com sucesso.");
                        System.out.println("Novo saldo: R$" + df.format(saldo));
                    }
                    break;

                case 3:
                    // 3 - Receber Valor (Depósito)
                    System.out.println("Qual valor você deseja depositar?");
                    double valorDeposito = leitura.nextDouble();

                    if (valorDeposito > 0) {
                        saldo += valorDeposito; // Aumenta o saldo
                        System.out.println("Depósito de R$" + df.format(valorDeposito) + " realizado com sucesso.");
                        System.out.println("Novo saldo: R$" + df.format(saldo));
                    } else {
                        System.out.println("Valor inválido. O depósito deve ser maior que zero.");
                    }
                    break;

                case 4:
                    // 4 - Sair
                    System.out.println("Obrigado por utilizar o nosso sistema. Volte sempre!");
                    break;

                default:
                    // Opção Inválida
                    System.out.println("Opção inválida. Por favor, escolha uma das opções de 1 a 4.");
            }
            // Adiciona uma linha em branco para melhor leitura da próxima iteração do menu
            System.out.println("\n"); 
        }

        // Fecha o scanner para liberar recursos
        leitura.close();
    }
}