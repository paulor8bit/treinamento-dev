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
		System.out.println("Voc� deseja avan�ar qual dire��o? (w,s,a,d)");
		String comando = in.nextLine();
		if (comando.equals("w")) {
			System.out.println("Voc�  esta indo para frente");
			System.out.println("Um inimigo surgiu, o que deseja fazer? (a=atacar, c=correr");
			comando = in.nextLine();
			if (comando.equals("a") ) {
				if(rand.nextInt(100) < 75) {
					System.out.println("Voc� ganhou");
				}else {
					System.out.println("Voc� perdeu");
				} 
			}else { 
					System.out.println("Voc� correu! O jogo terminou");
				}
		
		}
	}
}
}