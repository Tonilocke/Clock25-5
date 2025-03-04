import { useState,useEffect } from 'react';
import './App.css';
import Clock from './components/Clock';
import Button from './components/Button';

function App() {
  const [totalTime, setTotalTime] = useState(1);
  const [seconds, setSeconds] = useState(3);
  const [minutes, setMinutes] = useState(totalTime);
  const [isBreak, setIsBreak] = useState(false);
  const [breakTime, setBreakTime] = useState(5);
  const [isPaused, setIsPaused] = useState(true);
  const defaultTime = 25;
  const defaultBreak = 5;
  
  useEffect(()=>{
    setInterval(()=>{
        setSeconds(seconds - 1);
        if(seconds == 0){
          setMinutes(minutes - 1);
          if(isBreak){
            if(minutes == 0){
              setIsBreak(!isBreak);
              setMinutes(totalTime);
            }
          }
          else{ 
            if(minutes == 0){
               setMinutes(breakTime);
               setIsBreak(!isBreak);
             }
          }
          setSeconds(3);
        }
    },1000)
  }, [seconds]);

  function increaseTime(type){
    type == "break" ? setBreakTime(breakTime + 1) : setTotalTime(totalTime + 1);
  }
  function decreaseTime(type){
    type == "break" ?breakTime-5 <0 ?setBreakTime(0): setBreakTime(breakTime - 1) : totalTime-5<0?setTotalTime(0): setTotalTime(totalTime - 1);
  }
  
  return (
    <div className='main'>
      <Clock totalTime={ totalTime } minutes = { minutes } seconds = { seconds } text = "Total Time"/>
      
      { /*isBreak ? <p>Remaining Break minutes: { minutes } </p>: null*/ }
      {isBreak? <Clock totalTime={ breakTime} minutes ={ minutes } seconds={ seconds } text="Break Time" /> : null}
      <Button timerFunc={increaseTime} type ="break">Increase break time</Button>
      <Button timerFunc={increaseTime} type =" "> Increase Study time</Button>
      <Button timerFunc={decreaseTime} type ="break">Decrease break time</Button>
      <Button timerFunc={decreaseTime} type =" "> Decrease Study time</Button>

    </div>
  )
}

export default App
