/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from 'react';

function Quatro() {
  const [respostaQuestao, setQuestao] = useState([]);
  const [QuestaoValorUm, setQuestaoValorUm] = useState('');
  const [QuestaoValorDois, setQuestaoValorDois] = useState('');
  const calculoQuestao =
    (QuestaoValorDois / 100) * (QuestaoValorUm * 1) - QuestaoValorUm * 1;
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
          5) Solicite o preço de uma mercadoria e o percentual de desconto.
          Exiba o valor do desconto e o preço a pagar.
        </strong>
      </p>
      <p>Digite o preço da mercadoria</p>
      <input
        value={QuestaoValorUm}
        onChange={(e) => setQuestaoValorUm(e.target.value)}
      />

      <p>Digite percentual de desconto para a mercadoria</p>
      <input
        value={QuestaoValorDois}
        onChange={(e) => setQuestaoValorDois(e.target.value)}
      />

      <button type="button" onClick={handleAddQuestao}>
        Calcular
      </button>
      <p>Valor a pagar: {respostaQuestao * -1}</p>
      <p>
        Valor do desconto:{' '}
        {respostaQuestao ? respostaQuestao - QuestaoValorUm * -1 : ''}
      </p>
    </>
  );
}

export default Quatro;
