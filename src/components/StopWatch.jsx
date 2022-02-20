import React, {useState, useEffect} from 'react';


const StopWatch = () => {
    const [time,setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(()=>{
        let interval=null;

        if(timerOn){
            interval = setInterval(()=>{
                setTime((prevTime)=>prevTime+10);
            },10);
        } else{
            clearInterval(interval);
        }

        return()=> clearInterval(interval);
    },[timerOn]);
  

  return (<div className="Stopwatch">
  <h2>{time}</h2>
  <button className="btn" onClick={()=> setTimerOn(true)}>Start</button>
  <button className="btn" onClick={()=> setTimerOn(false)}>Stop</button>
  <button className="btn" onClick={()=> setTimerOn(true)}>Resume</button>
  <button className="btn" onClick={()=> setTime(0)}>Reset</button>

  </div>
  )
};

export default StopWatch;