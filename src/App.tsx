import React from 'react';
import Header from './components/Header';
import Map from './components/Map';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Map />
      </main>
    </>
  )
}

export default App;
