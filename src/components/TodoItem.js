import React from 'react';

function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li style={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        style={styles.checkbox}
      />
      <span style={{
        ...styles.text,
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
}

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  checkbox: {
    marginRight: '10px',
  },
  text: {
    flex: 1,
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default TodoItem;