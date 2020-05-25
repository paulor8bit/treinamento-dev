/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from 'react';

function Dois() {
  const [respostaQuestao, setQuestao] = useState([]);
  const [QuestaoValor, setQuestaoValor] = useState('');
  const calculoQuestao = QuestaoValor * 1000;

  const handleAddQuestao = useCallback(() => {
    setQuestao([calculoQuestao]);
    // setQuestaoValor1(''); //apagar input depois de somar
    // setQuesta1Valor2('');
  }, [calculoQuestao]);

  return (
    <>
      <p>
        <strong>
          2) Escreva um programa que leia um valor em metros e o exiba
          convertido em milímetros
        </strong>
      </p>
      <p>Digite o Valor em metros</p>
      <input
        value={QuestaoValor}
        onChange={(e) => setQuestaoValor(e.target.value)}
      />

      <button type="button" onClick={handleAddQuestao}>
        Converter
      </button>
      <p>
        O valor convertido em milímetros é: <strong>{respostaQuestao} </strong>
      </p>
    </>
  );
}

export default Dois;
