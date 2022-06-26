import Nav from './nav';
import React from 'react';
import Row from './row';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <main>
      <section className='container'>
      <Nav/>
      <div className='title'>
        <h3>Runner's Workout</h3>
        <div className='underline'></div>
      </div>
      

      <Row/>
      </section>
      
    </main>
    
  );
}

export default App;
