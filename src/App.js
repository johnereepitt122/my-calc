import logo from './logo.svg';
import './App.css';



function Num({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

function Display () {
  return ( 
    <h1> Display
    </h1>
  )
}



function App() {

// const[disp, setDisp] = useState('0');

// const numberClickHander = (e) => {
//   e.preventDefault();
//   const value = e.targer.innerHTML; 
//   console.log(value);
//   alert(value);
// }

  return (
 <div class="whole-container"> 
 <br></br>
      <div class="heading"> 
      <br></br>
      <Display></Display>
     </div>

      <div class="first">  
      <section class="first-buttons">
      <Num message="7"> 7 </Num>
      <Num message="8"> 8 </Num>
      <Num message="9"> 9 </Num>
      <Num message="Divided by"> / </Num>
      </section>
      </div>
      
      <div class = "second">
      <section class="second-buttons">
      <Num message="4"> 4 </Num>
      <Num message="5"> 5 </Num>
      <Num message="6"> 6 </Num>
      <Num message="multiply by"> * </Num>
      </section>
      </div>

      <div class = "third">
      <section class="third-buttons">
      <Num message="1"> 1 </Num>
      <Num message="2"> 2 </Num>
      <Num message="3"> 3 </Num>
      <Num message="-"> - </Num>
      </section>
      </div>

      
      <div class = "fourth">
      <section class ="fourth-buttons">
      <Num message="clr"> clr </Num>
      <Num message="0"> 0 </Num>
      <Num message="="> = </Num>
      <Num message="+"> + </Num>
      </section>
      </div>
      </div>

  );
}

export default App;
