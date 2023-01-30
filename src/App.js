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
  return (
 <div class="whole-container"> 
      <div class="heading"> 
      <Display></Display>
      <div class="first"> 
      
      <section>
      <Num message="Playing!"> 7 </Num>
      <Num message="Uploading!"> 8 </Num>
      <Num message="Uploading!"> 9 </Num>
      <Num message="Uploading!"> / </Num>
      </section>
      </div>
      
      <div class = "second">
      <section>
      <Num message="Playing!"> 4 </Num>
      <Num message="Uploading!"> 5 </Num>
      <Num message="Uploading!"> 6 </Num>
      <Num message="Uploading!"> * </Num>
      </section>
      </div>

      <div class = "third">
      <section>
      <Num message="Playing!"> 1 </Num>
      <Num message="Uploading!"> 2 </Num>
      <Num message="Uploading!"> 3 </Num>
      <Num message="Uploading!"> - </Num>
      </section>
      </div>

      
      <div class = "fourth">
      <section>
      <Num message="Playing!"> CLR </Num>
      <Num message="Uploading!"> 0 </Num>
      <Num message="Uploading!"> = </Num>
      <Num message="Uploading!"> + </Num>
      </section>
      </div>

      </div>

    </div>
  );
}

export default App;
