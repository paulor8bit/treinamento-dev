import React, { useState, useEffect, useMemo, useCallback } from 'react';
// Criar uma soma entre duas variaveis
function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');
  const [newValue, setNewValue] = useState('');
  const soma = newValue * 1 + newTech * 1;

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech, newValue]);

    setNewTech('');
    setNewValue('');
  }, [newValue, newTech, tech]);

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');
    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
    return () => {};
  }, [tech]);
  const techSize = useMemo(() => tech.length, [tech]);
  return (
    <>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
        <li>Node.js</li>
      </ul>
      <strong>Você tem {techSize} teconologias</strong>
      <p>Digite o Valor 1</p>
      <input value={newTech} onChange={(e) => setNewTech(e.target.value)} />
      <p>Digite o Valor 2</p>
      <input value={newValue} onChange={(e) => setNewValue(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adcionar
      </button>
      <strong>A soma é: {soma}</strong>
    </>
  );
}

export default App;
