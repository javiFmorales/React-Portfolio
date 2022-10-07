import React from 'react';




import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project'

function App() {
  return (


    <div className="flex-column justify-center align-center min-100-vh bg-primary">
     
      <div className='head'>
        <Header />
        <Navigation />
      </div>

      <div className='project'>
      <Project/>
      </div>

      <div className='footer'>
      <Footer/>
      </div>


    </div>

  );
}

export default App;
