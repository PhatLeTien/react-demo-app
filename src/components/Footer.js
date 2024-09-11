import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 My Todo App. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%'
  }
};

export default Footer;