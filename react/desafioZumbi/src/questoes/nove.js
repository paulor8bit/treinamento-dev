/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from 'react';

function Nove() {
  const [respostaQuestao, setQuestao] = useState([]);
  const [QuestaoValorUm, setQuestaoValorUm] = useState('');
  const [QuestaoValorDois, setQuestaoValorDois] = useState('');
  const calculoQuestao = QuestaoValorDois * 1 * 60 + QuestaoValorUm * 1 * 0.15;

  const handleAddQuestao = useCallback(() => {
    setQuestao([calculoQuestao]);
    // setQuestaoValor1(''); //apagar input depois de somar
    // setQuesta1Valor2('');
  }, [calculoQuestao]);

  return (
    <>
      <p>
        <strong>
          9) Escreva um programa que pergunte a quantidade de km percorridos por
          um carro alugado pelo usuário, assim como a quantidade de dias pelos
          quais o carro foi alugado. Calcule o preço a pagar, sabendo que o
          carro custa R$ 60,00 por dia e R$ 0,15 por km rodado.
        </strong>
      </p>
      <p>quantidade de km percorridos</p>
      <input
        value={QuestaoValorUm}
        onChange={(e) => setQuestaoValorUm(e.target.value)}
      />

      <p>quantidade de dias alugado</p>
      <input
        value={QuestaoValorDois}
        onChange={(e) => setQuestaoValorDois(e.target.value)}
      />

      <button type="button" onClick={handleAddQuestao}>
        Calcular
      </button>
      <p>
        <strong>O valor é R$: {respostaQuestao}</strong>
      </p>
    </>
  );
}

export default Nove;
