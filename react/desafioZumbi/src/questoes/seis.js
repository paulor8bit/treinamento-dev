/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from 'react';

function Um() {
  const [respostaQuestao, setQuestao] = useState([]);
  const [QuestaoValorUm, setQuestaoValorUm] = useState('');
  const [QuestaoValorDois, setQuestaoValorDois] = useState('');
  const calculoQuestao = ((QuestaoValorUm * 1) / QuestaoValorDois) * 1;

  const handleAddQuestao = useCallback(() => {
    setQuestao([calculoQuestao]);
    // setQuestaoValor1(''); //apagar input depois de somar
    // setQuesta1Valor2('');
  }, [calculoQuestao]);

  return (
    <>
      <p>
        <strong>
          6) Calcule o tempo de uma viagem de carro. Pergunte a distância a
          percorrer e a velocidade média esperada para a viagem.
        </strong>
      </p>
      <p>Digite a distância da viagem</p>
      <input
        value={QuestaoValorUm}
        onChange={(e) => setQuestaoValorUm(e.target.value)}
      />

      <p>Digite a velocidade média</p>
      <input
        value={QuestaoValorDois}
        onChange={(e) => setQuestaoValorDois(e.target.value)}
      />

      <button type="button" onClick={handleAddQuestao}>
        Calcular
      </button>
      <p>
        <strong>O tempo médio gasto será de: {respostaQuestao}</strong>
      </p>
    </>
  );
}

export default Um;
