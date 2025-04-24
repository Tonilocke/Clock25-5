import { useState,useEffect } from 'react';
import './App.css';
import Clock from './components/Clock';
import Button from './components/Button';

function App() {
  const defaultTime = 25;
  const defaultBreak = 5;
  const [totalTime, setTotalTime] = useState(defaultTime);
  const [seconds, setSeconds] = useState(60);
  const [minutes, setMinutes] = useState(totalTime);
  const [isBreak, setIsBreak] = useState(false);
  const [breakTime, setBreakTime] = useState(defaultBreak);
  const [isPaused, setIsPaused] = useState(false);
 
  
  useEffect(()=>{
    setInterval(()=>{
      if(!isPaused){
        
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
          setSeconds(60);
        }
      }
    },1000)
  }, [seconds,isPaused]);

  function increaseTime(type){
    type == "break" ? setBreakTime(breakTime + 1) : setTotalTime(totalTime + 1);
  }
  function decreaseTime(type){
    type == "break" ?breakTime-5 <0 ?setBreakTime(0): setBreakTime(breakTime - 1) : totalTime-5<0?setTotalTime(0): setTotalTime(totalTime - 1);
  }
  function reset(){
    setBreakTime(defaultBreak);
    setTotalTime(defaultTime);
  }
  
  return (
    <div className='main'>
      
      
      <p>Study Time: { totalTime }</p>
      <p>Break Time: { breakTime }</p>
      {isBreak? <Clock totalTime={ breakTime} minutes ={ minutes } seconds={ seconds } text="Break Time" /> : <Clock totalTime={ totalTime } minutes = { minutes } seconds = { seconds } text = "Study Time"/>}
      <Button timerFunc = {increaseTime} type ="break">Increase break time</Button>
      <Button timerFunc = {increaseTime} type =" "> Increase Study time</Button>
      <Button timerFunc = {decreaseTime} type ="break">Decrease break time</Button>
      <Button timerFunc = {decreaseTime} type =" "> Decrease Study time</Button>
      <Button timerFunc = {()=>setIsPaused(!isPaused)} type="pause"> Pause</Button>
      <Button timerFunc={ reset } type="reset">Reset</Button>
      <p className={isPaused? "pause-button" : null}>{isPaused ? "Pause": null}</p>
    </div>
  )
}

export default App
