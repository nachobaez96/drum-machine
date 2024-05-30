import React, { useState } from 'react'
import './App.css'
import Pad from './Pad.jsx'

const kit1 = [
  { name: "Heater 1", link: "./assets/audio/Heater-1.mp3" },
  { name: "Heater 2", link: "./assets/audio/Heater-2.mp3" },
  { name: "Heater 3", link: "./assets/audio/Heater-3.mp3" },
  { name: "Heater 4", link: "./assets/audio/Heater-4.mp3" },
  { name: "Clap", link: "./assets/audio/Clap.mp3" },
  { name: "Open-HH", link: "./assets/audio/Open-HH.mp3" },
  { name: "Kick-n'-Hat", link: "./assets/audio/Kick_n_Hat.mp3" },
  { name: "Kick", link: "./assets/audio/Kick.mp3" },
  { name: "Closed-HH", link: "./assets/audio/Closed-HH.mp3" }
]

const kit2 = [
  { name: "Alert", link: "./assets/audio/kit2/Alert.mp3" },
  { name: "Boom", link: "./assets/audio/kit2/Boom.mp3" },
  { name: "Dolphin", link: "./assets/audio/kit2/Dolphin.mp3" },
  { name: "Glass", link: "./assets/audio/kit2/Glass.mp3" },
  { name: "Reload", link: "./assets/audio/kit2/Reload.mp3" },
  { name: "Rubber-Duck", link: "./assets/audio/kit2/Rubber-Duck.mp3" },
  { name: "Slap", link: "./assets/audio/kit2/Slap.mp3" },
  { name: "Wilhelm", link: "./assets/audio/kit2/Wilhelm.mp3" },
  { name: "Yeet", link: "./assets/audio/kit2/Yeet.mp3" }
]


function App() {
  const [sounds, setSounds] = useState(kit1)
  const [display, setDisplay] = useState('')
  const [isKit1, setIsKit1] = useState(true)

  const updateDisplay = (name) => {
    setDisplay(name)
  }

  const switchKit = () => {
    if (isKit1) {
      setSounds(kit2)
    } else {
      setSounds(kit1)
    }
    setIsKit1(!isKit1)
  }

  return (
    <div id="drum-machine">
      <div className="controls">
        <button onClick={switchKit}>Switch Kit</button>
      </div>
      <div className="squares-container">
        <Pad name={sounds[0].name} link={sounds[0].link} triggerKey={'q'} updateDisplay={updateDisplay} />
        <Pad name={sounds[1].name} link={sounds[1].link} triggerKey={'w'} updateDisplay={updateDisplay} />
        <Pad name={sounds[2].name} link={sounds[2].link} triggerKey={'e'} updateDisplay={updateDisplay} />
        <Pad name={sounds[3].name} link={sounds[3].link} triggerKey={'a'} updateDisplay={updateDisplay} />
        <Pad name={sounds[4].name} link={sounds[4].link} triggerKey={'s'} updateDisplay={updateDisplay} />
        <Pad name={sounds[5].name} link={sounds[5].link} triggerKey={'d'} updateDisplay={updateDisplay} />
        <Pad name={sounds[6].name} link={sounds[6].link} triggerKey={'z'} updateDisplay={updateDisplay} />
        <Pad name={sounds[7].name} link={sounds[7].link} triggerKey={'x'} updateDisplay={updateDisplay} />
        <Pad name={sounds[8].name} link={sounds[8].link} triggerKey={'c'} updateDisplay={updateDisplay} />
      </div>
      <div className="display">{display}</div>
    </div>
  )
}

export default App
