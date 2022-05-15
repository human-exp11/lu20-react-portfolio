import React from 'react';
import '../styles/Footer.css';

const styles = {
    headerStyle: {
      background: 'red',
    },
    headingStyle: {
      fontSize: '100px',
    },
};
  

  
function Footer() {
    return (
      <header style={styles.footerStyle} className="header">
        <h1 style={styles.footerStyle}>Check Out My Pages!</h1>
      </header>
    );
}
  
export default Footer;