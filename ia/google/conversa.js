import "dotenv/config";
import readline from "readline";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function iniciarChat() {
  console.log("🌟 Gemini-chan está online! Fale com ela digitando abaixo! (digite 'sair' para encerrar) 💬✨\n");

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  const chat = model.startChat({ history: [] });

  const perguntar = () => {
    rl.question("🧑‍💻 Você: ", async (mensagem) => {
      if (mensagem.toLowerCase() === "sair") {
        console.log("👋 Tchauzinho! Gemini-chan vai sentir sua falta! (≧◡≦) ♡");
        rl.close();
        return;
      }

      try {
        const resposta = await chat.sendMessage(mensagem);
        const texto = resposta.response.text();
        console.log(`🤖 Gemini-chan: ${texto}\n`);
      } catch (erro) {
        console.error("❌ Ocorreu um erro:", erro.message);
      }

      perguntar(); // Loop
    });
  };

  perguntar();
}

iniciarChat();
