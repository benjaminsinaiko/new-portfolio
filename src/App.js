import React from 'react';

import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
