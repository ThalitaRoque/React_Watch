import './App.css';
import DigitalClock from './components/DigitalClock';
import CountDown from './components/CountDown';
import StopWatch from './components/StopWatch'; 

function App() {
  return (
    <div className="Reloj">
    <DigitalClock/>
    <CountDown/>
    <StopWatch/> 
      
    </div>
  );
}

export default App;