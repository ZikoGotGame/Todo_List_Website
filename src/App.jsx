
import { useEffect, useState } from 'react';
import './styles.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function App(){
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos]);

  function addTodo(title){
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false}
      ]
    });
  }

  function deleteTodos(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => { {/**.map() basically loops through an arrays elements. */}
        if (todo.id === id){
          return {...todo, completed}; {/** changes the completed property to the parameter property. the reason we did this instead of directly modifying todo is because state is immutable in react */}
        }
        return todo;
      })
    });
  };

  return (
  <div className='part'> 
    <TodoForm onSubmit={addTodo} />
    <h1 className='header'>Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodos={deleteTodos} />
  </div>
  );
};