import { useState,useEffect } from 'react';
import './App.css';
import Clock from './components/Clock';

function App() {
  const [totalTime, setTotalTime] = useState(1);
  const [seconds, setSeconds] = useState(3);
  const [minutes, setMinutes] = useState(totalTime);
  const [brek, setBrek] = useState(true);
  const [brekTime, setBrekTime] = useState(5);

  useEffect(()=>{
    setInterval(()=>{
      setSeconds(seconds - 1);
      if(seconds == 0){
        setSeconds(3);
        setMinutes(minutes - 1);
        setTotalTime( totalTime - 1)
        if(brek){
          setBrekTime(brekTime-1);
        }
      }
      if(totalTime == 0){
        setSeconds(3);
        setTotalTime(1);
        setMinutes(totalTime);
      }
      if(brekTime == 0){
        setBrek(false);
      }
    },1000)
  }, [seconds, totalTime]);
  return (
    <>
      <Clock totalTime={ totalTime } minutes = { minutes } seconds = { seconds }/>
      <h3>{brekTime}</h3>
    </>
  )
}

export default App
