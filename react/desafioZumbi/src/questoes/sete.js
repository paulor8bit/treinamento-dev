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
          7) Converta uma temperatura digitada em Celsius para Fahrenheit. F =
          9*C/5 + 32
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
