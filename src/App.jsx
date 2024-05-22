import React, { useState } from 'react'
import './App.css'
import Pad from './Pad.jsx'

const kit1 = [
  { name: "Heater 1", link: "../assets/audio/Heater-1.mp3" },
  { name: "Heater 2", link: "./assets/audio/Heater-2.mp3" },
  { name: "Heater 3", link: "./assets/audio/Heater-3.mp3" },
  { name: "Heater 4", link: "./assets/audio/Heater-4.mp3" },
  { name: "Clap", link: "./assets/audio/Clap.mp3" },
  { name: "Open-HH", link: "./assets/audio/Open-HH.mp3" },
  { name: "Kick-n'-Hat", link: "./assets/audio/Kick-n-Hat.mp3" },
  { name: "Kick", link: "./assets/audio/Kick.mp3" },
  { name: "Closed-HH", link: "./assets/audio/Closed-HH.mp3" }
];


function App() {

  const [sounds, setSounds] = React.useState(kit1)

  return (
    <div id="drum-machine">
      <div className="squares-container">
        <Pad name={sounds[0].name} link={sounds[0].link} />
        <Pad name={sounds[1].name} link={sounds[1].link} />
        <Pad name={sounds[2].name} link={sounds[2].link} />
        <Pad name={sounds[3].name} link={sounds[3].link} />
        <Pad name={sounds[4].name} link={sounds[4].link} />
        <Pad name={sounds[5].name} link={sounds[5].link} />
        <Pad name={sounds[6].name} link={sounds[6].link} />
        <Pad name={sounds[7].name} link={sounds[7].link} />
        <Pad name={sounds[8].name} link={sounds[8].link} />
      </div>
      <div className="display">Name of button here</div>
    </div>
  )
}

export default App
