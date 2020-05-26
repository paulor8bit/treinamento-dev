/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from 'react';

function Sete() {
  const [respostaQuestao, setQuestao] = useState([]);
  const [QuestaoValorUm, setQuestaoValorUm] = useState('');
  const calculoQuestao = QuestaoValorUm * 1 * 2 + 30;

  const handleAddQuestao = useCallback(() => {
    setQuestao([calculoQuestao]);
    // setQuestaoValor1(''); //apagar input depois de somar
    // setQuesta1Valor2('');
  }, [calculoQuestao]);

  return (
    <>
      <p>
        <strong>
          7) Converta uma temperatura digitada em Celsius para Fahrenheit.
        </strong>
      </p>
      <p>Digite o Valor em Celsius</p>
      <input
        value={QuestaoValorUm}
        onChange={(e) => setQuestaoValorUm(e.target.value)}
      />

      <button type="button" onClick={handleAddQuestao}>
        Converter
      </button>
      <p>
        <strong>A conversão para Fahrenheit é: {respostaQuestao}</strong>
      </p>
    </>
  );
}

export default Sete;
