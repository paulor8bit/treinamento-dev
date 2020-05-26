/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from 'react';

function Oito() {
  const [respostaQuestao, setQuestao] = useState([]);
  const [QuestaoValorUm, setQuestaoValorUm] = useState('');
  const calculoQuestao = (QuestaoValorUm * 1 - 30) / 2;

  const handleAddQuestao = useCallback(() => {
    setQuestao([calculoQuestao]);
    // setQuestaoValor1(''); //apagar input depois de somar
    // setQuesta1Valor2('');
  }, [calculoQuestao]);

  return (
    <>
      <p>
        <strong>
          8) Converta uma temperatura digitada em Fahrenheit para Celsius.
        </strong>
      </p>
      <p>Digite o Valor em Fahrenheit</p>
      <input
        value={QuestaoValorUm}
        onChange={(e) => setQuestaoValorUm(e.target.value)}
      />

      <button type="button" onClick={handleAddQuestao}>
        Converter
      </button>
      <p>
        <strong>A conversão para Celsius é: {respostaQuestao}</strong>
      </p>
    </>
  );
}

export default Oito;
