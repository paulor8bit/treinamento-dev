package aula;

public class Main {
	public static void main(String[] args) {
		int idade = 29; 
		System.out.println("Hello, World");
		System.out.println("Minha idade � " +idade);
		idade = 30;
		System.out.println("Minha idade � " +idade);
		System.out.println("Minha idade � " +(idade+1));
		
		//Tipos de variaveis
		int numero = 3000; 
		String frase = "Ol� mundo!"; 
		boolean var = true; 
		char var2 = 'a'; 
		double var3 = 24.9; 
		
		System.out.println(numero); 
		System.out.println(frase);
		System.out.println(var);
		System.out.println(var2);
		System.out.println(var3);

		//constantes
		
		final int vida_maxima = 10; 
		System.out.println(vida_maxima); 
		
		//Arrays
		String[] nome = new String[5]; 
		nome[0] = "Guilherme"; 
		nome[1] = "Jo�o";
		System.out.println(nome[0]);
		System.out.println(nome[1]);
		
		String[][] nome2 = new String[5][5]; 
		nome2[0][0] = "Felipe";
		System.out.println(nome2[0][0]);
		
		//Condi��es
		int vida = 101;
		if (vida > 100) {
			vida+=100;
			System.out.println("Minha vida � maior que 100. Com total: " +vida);
				}else {
					System.out.println("Minha vida n�o � maior a 100");
				}
		
		String nome3 ="Paulo"; 
		String nome4 = "Ricardo";
		if(nome3 == "Paulo" && nome4 == "Ricardo") { 
			System.out.println("Nomes igual a" +nome3);
		}
	
		//Swicth and Case
		
		int life = 100; 
				
		switch(life) 
		{
			case 90: 
				System.out.println("O life � 90");
			break;
			case 30:
				System.out.println("O life � 30");
				break;
			default: 
				System.out.println("Nenhuma das condi��e bateu");
		}
		
		//Opera��es
		int vida_1 = 100;
		int vida_2 = 100;
		int vida_3 = 100;
		
		int vida_final = vida_1 + vida_2 + vida_3;
		
		System.out.println(" A vida � final � "+vida_final);
		
		int vida_final2 = ((vida_1 + vida_2)/2)*2;
		System.out.println(" A vida � final � "+vida_final2);
		
		//repeti��o
		
		int contador = 1; 
		
		while(contador <= 10) {
			System.out.println(" O contador agora esta em  "+contador);
			contador++;
		}
		
		
		for(int i=11;i<=20;i++) {
			System.out.println(" O contador agora esta em  "+i);	
		}
		
	}

}
