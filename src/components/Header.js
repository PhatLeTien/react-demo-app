import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>My Todo App</h1>
    </header>
  );
}

const styles = {
  header: {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }
};

export default Header;