/* eslint-disable react/jsx-key */
import { useState } from 'react'

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

import './App.css';

function App() {
  const [todo, setTodos] = useState([
    {
      id:1,
      text: "Criar funcionalidade x no sistema",
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
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    
    const newTodos = [...todo, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        inCompleted: false,
      },
    ];
    
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todo]
    const filteredTodos = newTodos.filter((todos) => 
      todos.id !== id ? todos : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todo];
    newTodos.map((todos) => 
      todos.id === id ? todos.isCompleted = !todos.isCompleted : todos
    );
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="all-list">
        {todo
          .filter((todo) => 
            filter === "All" 
              ? true 
              : filter === "Completed" 
              ? todo.isCompleted 
              : !todo.isCompleted
          )
          .filter((todo) => 
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => 
            sort === "Asc" 
              ? a.text.localeCompare(b.text) 
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo 
              key={todo.id} 
              todo={todo} 
              removeTodo={removeTodo} 
              completeTodo={completeTodo}
            />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App
