import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.text.trim()) {
      setTodos([...todos, { ...todo, id: Date.now() }]);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <main>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;