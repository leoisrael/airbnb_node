import React from 'react';
import './App.css';

import cnc from './assets/airbnb-logo-2.png';

function App() {
  return (
    <div className="container">
      <img 
      src={cnc} 
      alt="cnc"
      className='img'
      width="320" 
      height="102"
      />
      <div className='content'>
        <p>
          seja bem-vindo, vamos realizar agora o seu login 
        </p>

        <form>
          <label 
           htmlFor="email"
           id='label'
          >
            EMAIL *
          </label>
          <input
           type="text"
           id='email'
           placeholder='qual seu melhor email?'
           />
           <input
            type='password'
            id='senha'
            placeholder='senha'
            />
           <button 
           className='btn' 
           type='submit'>
             ENTRAR
           </button>
        </form>
      </div>
    </div>
  );
}

export default App;
