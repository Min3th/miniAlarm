
import './App.css';
import sound from "./sounds/best_alarm.mp3"
import { useState, useEffect } from 'react';
import {format, parse} from "date-fns";

function App() {


  const [hours,setHours] = useState('');
  const [minutes,setMinutes] = useState('');
  let activeTime = '';
  let audioElement =new Audio(sound)

  // useEffect(()=>{
  //   play()
  // },[value])


  const currentTime = new Date();
  const alarm =(activeTime) =>{
    const now = new Date()
    
    const [enteredHours,enteredMinutes] = activeTime.split(':');

    const targetHours = parseInt(enteredHours,10) - now.getHours();
    const targetMinutes = parseInt(enteredMinutes,10) - now.getMinutes();
    const targetTime = (targetHours*60*60) + (targetMinutes*60);
    console.log(targetTime);
    
    setTimeout(()=>{
      audioElement.play();
      console.log('working')
    },targetTime*1000);
    
  }
  
  function Stop(){
    audioElement.pause();
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    activeTime = `${hours}:${minutes}`
    alarm(activeTime);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
        id ="hour-input"
        type='number'
        required
        placeholder='Hours'
        value={hours}
        onChange={(e)=>setHours(e.target.value)}
        />
        <input
        id ="minutes-input"
        type='number'
        placeholder='minutes'
        required
        value={minutes}
        onChange={(e)=>setMinutes(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
     
        
        


      <button onClick={Stop}>
        Press to Stop
      </button>
      
    </div>
  );
}

export default App;
