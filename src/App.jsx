import { useState } from 'react'

import './App.css';

function App() {
  const [all, setAll] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  return <div className='app'>
    <h1>Lista de Tarefas</h1>

    <div className="all-list">
      {all.map((all) => (
        // eslint-disable-next-line react/jsx-key
        <div className="all">
          <div className="content">
            <p>{all.text}</p>
            <p className="category">
              ({all.category})
            </p>
          </div>
          <div>
            <button>Completar</button>
            <button>x</button>
          </div>
        </div>
      ))}
    </div>
  </div>;
}

export default App
