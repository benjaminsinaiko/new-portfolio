import React from 'react';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <main>
        <NavBar />
        <Projects />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
