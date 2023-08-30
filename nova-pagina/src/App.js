
import './App.css';
import mvp from "./img/rindo.png";
import dinheiro from "./img/dinheiro.png";
import porfavor from "./img/porfavor.png";
import calate from "./img/calate.png";

function App() {
  return (
    <div className="App">
      <div className ="principal">
        <h1>Hello World!</h1>
      </div>
      <div className ="principal">
        <img src={mvp} alt="Logo" title="KSKSKSKSKSKK"/>
      </div>
      <div>
        <h2>
          Sofri viu!
        </h2>
      </div>
      <div className="Blocos">
        <div>
          <img className="dinheiro" src={dinheiro} alt="Logo" title="Como é amigo ?"/>
        </div>
        <div>
          <img className="porfavor" src={porfavor} alt="Logo" title="Faz um pix ?"/>
        </div>
        <div>
          <img className="calate" src={calate} alt="Logo" title="Calate pls!"/>
        </div> 
      </div>
      
    
      
    </div>
  );
}

export default App;
