import React from 'react';

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <main>
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
