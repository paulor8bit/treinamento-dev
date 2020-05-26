/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from 'react';

function Tres() {
  const [respostaQuestao, setQuestao] = useState([]);
  const [QuestaoValorUm, setQuestaoValorUm] = useState('');
  const [QuestaoValorDois, setQuestaoValorDois] = useState('');
  const [QuestaoValorTres, setQuestaoValorTres] = useState('');
  const [QuestaoValorQuatro, setQuestaoValorQuatro] = useState('');
  const calculoQuestao = (QuestaoValorDois * 3600 )+ (QuestaoValorUm * 86400) + (QuestaoValorTres * 60) + (QuestaoValorQuatro*1);

  const handleAddQuestao = useCallback(() => {
    setQuestao([calculoQuestao]);
    // setQuestaoValor1(''); //apagar input depois de somar
    // setQuesta1Valor2('');
  }, [calculoQuestao]);
//1 dia 86400s
//1 hora 3600s
  return (
    <>
      <p>
        <strong>
          3) Escreva um programa que leia a quantidade de dias, horas, minutos e
          segundos do usuário. Calcule o total em segundos.
        </strong>

      </p>
      <p>Digite quantidade de dias</p>
      <input
        value={QuestaoValorUm}
        onChange={(e) => setQuestaoValorUm(e.target.value)}
      />

      <p>Digite quantidade de horas</p>
      <input
        value={QuestaoValorDois}
        onChange={(e) => setQuestaoValorDois(e.target.value)}
      />


    <p>Digite quantidade minutos</p>
      <input
        value={QuestaoValorTres}
        onChange={(e) => setQuestaoValorTres(e.target.value)}
      />

    <p>Digite quantidade de segundos</p>
      <input
        value={QuestaoValorQuatro}
        onChange={(e) => setQuestaoValorQuatro(e.target.value)}
      />
      <button type="button" onClick={handleAddQuestao}>
        Converter
      </button>
      <p>
        A conversão em segundos é: {respostaQuestao}
      </p>
    </>
  );
}

export default Tres;
