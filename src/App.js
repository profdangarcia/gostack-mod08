import React, { useState } from 'react';

function App() {
  // useState recebe o valor inicial
  // tech é o estado setTech a função que atualiza o estado
  const [techs, setTechs] = useState(['React', 'Node', 'React Native']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }
  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
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
