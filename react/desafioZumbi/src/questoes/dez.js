/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from 'react';

function Um() {
  const [respostaQuestao, setQuestao] = useState([]);
  const [QuestaoValorUm, setQuestaoValorUm] = useState('');
  const [QuestaoValorDois, setQuestaoValorDois] = useState('');
  const calculoQuestao = QuestaoValorDois * 1 + QuestaoValorUm * 1;

  const handleAddQuestao = useCallback(() => {
    setQuestao([calculoQuestao]);
    // setQuestaoValor1(''); //apagar input depois de somar
    // setQuesta1Valor2('');
  }, [calculoQuestao]);

  return (
    <>
      <p>
        <strong>
          10) Escreva um programa para calcular a redução do tempo de vida de um
          fumante. Pergunte a quantidade de cigarros fumados por dia e quantos
          anos ele já fumou. Considere que um fumante perde 10 minutos de vida a
          cada cigarro, calcule quantos dias de vida um fumante perderá. Exiba o
          total de dias.
        </strong>
      </p>
      <p>Digite o Valor 1</p>
      <input
        value={QuestaoValorUm}
        onChange={(e) => setQuestaoValorUm(e.target.value)}
      />

      <p>Digite o Valor 2</p>
      <input
        value={QuestaoValorDois}
        onChange={(e) => setQuestaoValorDois(e.target.value)}
      />

      <button type="button" onClick={handleAddQuestao}>
        Somar
      </button>
      <p>
        <strong>A soma é: {respostaQuestao}</strong>
      </p>
    </>
  );
}

export default Um;
