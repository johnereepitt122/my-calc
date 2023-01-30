import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function Num({ message="?", onClick }) {
  return (
    <button onClick={onClick}>
      {message}
    </button>
  );
}

function Display({display}) {
  return ( 
    <div> {display}
    </div>
  );
}

function App() { 


const[disp, setDisp] = useState('0');

const numberClickHandler = (e) => {
  e.preventDefault();
  const value = e.target.innerHTML; 
  setDisp(value);
  console.log(value);
}

  return (
 <div class="whole-container"> 
 <br></br>
      <div class="heading"> 
      <br></br>
      <Display display= {disp}/> 
      </div>

      <div class="first">  
      <section class="first-buttons">
      <Num message="7" onClick={numberClickHandler}/>
      <Num message="8" onClick={numberClickHandler}/>
      <Num message="9" onClick={numberClickHandler}/>
      <Num message="/" onClick={numberClickHandler}/>
      </section>
      </div>
      
      <div class = "second">
      <section class="second-buttons">
      <Num message="4" onClick={numberClickHandler}/>
      <Num message="5" onClick={numberClickHandler}/>
      <Num message="6" onClick={numberClickHandler}/>
      <Num message="*" onClick={numberClickHandler}/>
      </section>
      </div>

      <div class = "third">
      <section class="third-buttons">
      <Num message="1" onClick={numberClickHandler}/>
      <Num message="2" onClick={numberClickHandler}/> 
      <Num message="3" onClick={numberClickHandler}/>
      <Num message="-" onClick={numberClickHandler}/>
      </section>
      </div>

      
      <div class = "fourth">
      <section class ="fourth-buttons">
      <Num message="clr" onClick={numberClickHandler}/>
      <Num message="0" onClick={numberClickHandler}/>
      <Num message="=" onClick={numberClickHandler}/>
      <Num message="+" onClick={numberClickHandler}/>
      </section>
      </div>
      </div>

  );
}

export default App;
