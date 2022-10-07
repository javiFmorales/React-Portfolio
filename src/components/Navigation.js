import React from 'react';

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div style={linkStyle}>
          <a href="#">ABOUT ME</a>
        </div>
        <div style={linkStyle}>
          <a href="#">PORTFOLIO</a>
        </div>
        <div style={linkStyle}>
          <a href="#">CONTACT ME</a>
        </div>
        <div style={linkStyle}>
          <a href="#">RESUME</a>
        </div>
       
      </section>
    </nav>
  );
}
