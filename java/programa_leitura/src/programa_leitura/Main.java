package programa_leitura;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		String nome, idade, peso, cidade, estado, pais;
		
		System.out.println("Digite o nome");
		nome = in.nextLine(); 
		
		System.out.println("Digite a idade");
		idade = in.nextLine(); 
		
		System.out.println("Digite o peso");
		peso = in.nextLine(); 
		//if(peso >= 100 ) {
		//	System.out.println("Ta gordinho hein");}
				
		
		System.out.println("Digite a cidade");
		cidade = in.nextLine(); 
		if(cidade == "maceio") {
		System.out.println("Que legal que você é de Maceió");
		}else {
			System.out.println("Eu sou de Maceio");
		}
		
		System.out.println("Digite o estado");
		estado = in.nextLine(); 
		
		System.out.println("Digite o pais");
		pais = in.nextLine();
		
		System.out.println("---------------------");
		System.out.println("Nome: "+nome);
		System.out.println("Idade: "+idade);
		System.out.println("Peso: "+peso);
		System.out.println("Cidade: "+cidade);
		System.out.println("Estado: "+estado);
		System.out.println("País: "+pais);
		
	}
}
