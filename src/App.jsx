import { useState } from 'react'

import All from './components/All';
import AllForm from './components/AllForm';


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
        <All all={all} />
      ))}
    </div>
    <AllForm />
  </div>;
}

export default App
