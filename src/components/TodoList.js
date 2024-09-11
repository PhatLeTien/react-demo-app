import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, toggleComplete }) {
  if (todos.length === 0) {
    return <p>No todos yet. Add a todo to get started!</p>;
  }

  return (
    <ul style={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyleType: 'none',
    padding: 0,
  },
};

export default TodoList;