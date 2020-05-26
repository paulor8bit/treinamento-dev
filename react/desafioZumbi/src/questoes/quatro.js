/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from 'react';

function Quatro() {
  const [respostaQuestao, setQuestao] = useState([]);
  const [QuestaoValorUm, setQuestaoValorUm] = useState('');
  const [QuestaoValorDois, setQuestaoValorDois] = useState('');
  const calculoQuestao =
    (QuestaoValorDois / 100) * (QuestaoValorUm * 1) + QuestaoValorUm * 1;
  // const diferenca = calculoQuestao - QuestaoValorUm * 1;

  const handleAddQuestao = useCallback(() => {
    setQuestao([calculoQuestao]);
    // setQuestaoValor1(''); //apagar input depois de somar
    // setQuesta1Valor2('');
  }, [calculoQuestao]);

  return (
    <>
      <p>
        <strong>
          4) Faça um programa que calcule o aumento de um salário. Ele deve
          solicitar o valor do salário e a porcentagem do aumento. Exiba o valor
          do aumento e do novo salário.
        </strong>
      </p>
      <p>Digite o valor do salário</p>
      <input
        value={QuestaoValorUm}
        onChange={(e) => setQuestaoValorUm(e.target.value)}
      />

      <p>Digite o aumento do salário em porcentagem</p>
      <input
        value={QuestaoValorDois}
        onChange={(e) => setQuestaoValorDois(e.target.value)}
      />

      <button type="button" onClick={handleAddQuestao}>
        Calcular
      </button>
      <p>O novo salário é de R$: {respostaQuestao}</p>
      <p>
        O aumento foi de R$:{' '}
        {respostaQuestao ? respostaQuestao - QuestaoValorUm * 1 : ''}
      </p>
    </>
  );
}

export default Quatro;
