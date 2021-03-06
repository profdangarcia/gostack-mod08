import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  /** HOOK useState - Estados */
  // useState recebe o valor inicial
  // tech é o estado setTech a função que atualiza o estado
  const [techs, setTechs] = useState(['React', 'Node', 'React Native']);
  const [newTech, setNewTech] = useState('');

  /** Função antes de utilizar o useCallback */
  // function handleAdd() {
  //   setTechs([...techs, newTech]);
  //   setNewTech('');
  // }

  /** HOOK useCallback - para evitar recriação de funções desnecessariamente */
  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  /** HOOK useEffect - ciclo de vida */
  // useEffect substitui as funções de ciclo de vida
  // utilizando useEffect como o componentDidMount
  // basta passar um array vazio
  useEffect(() => {
    const tecs = localStorage.getItem('techs');
    if (tecs) {
      setTechs(JSON.parse(tecs));
    }

    // useEffect como componentDidUnmount
    // basta colocar o código no return de uma função
    // return () => {};
  }, []);

  // useEffect como componentDidUpdate
  // recebe uma função como primeiro parametro
  // recebe quais estados (em vetor) que quando alterados executam a função
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  //* * HOOK useMemo - para calculos e manipulação dos dados */
  // recebe uma função e os parametros que quando alterados executam a função
  // retorna algo específico
  const techsSize = useMemo(() => techs.length, [techs]);
  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>Você tem {techsSize} tecnologias</strong> <br />
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Nova
      </button>
    </>
  );
}

export default App;
