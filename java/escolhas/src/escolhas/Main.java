package escolhas;

import java.util.Random;
import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
	try (Scanner in = new Scanner(System.in)) {
		String nome; 
		Random rand = new Random();
		System.out.println("Seja bem vindo ao Jogo! Insira seu nome");
		nome = in.nextLine();
		System.out.println("Seja bem vindo ao Jogo" +nome);
		System.out.println("Você deseja avançar qual direção? (w,s,a,d)");
		String comando = in.nextLine();
		if (comando.equals("w")) {
			System.out.println("Você  esta indo para frente");
			System.out.println("Um inimigo surgiu, o que deseja fazer? (a=atacar, c=correr");
			comando = in.nextLine();
			if (comando.equals("a") ) {
				if(rand.nextInt(100) < 75) {
					System.out.println("Você ganhou");
				}else {
					System.out.println("Você perdeu");
				} 
			}else { 
					System.out.println("Você correu! O jogo terminou");
				}
		
		}
	}
}
}