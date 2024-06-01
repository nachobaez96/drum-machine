import React, { useState, useEffect } from 'react'
import './App.css'
import Pad from './Pad.jsx'

const kit1 = [
  { name: "Heater 1", link: "./assets/audio/Heater-1.mp3", startTime: 0, triggerKey: 'q' },
  { name: "Heater 2", link: "./assets/audio/Heater-2.mp3", startTime: 0, triggerKey: 'w' },
  { name: "Heater 3", link: "./assets/audio/Heater-3.mp3", startTime: 0, triggerKey: 'e' },
  { name: "Heater 4", link: "./assets/audio/Heater-4.mp3", startTime: 0, triggerKey: 'a' },
  { name: "Clap", link: "./assets/audio/Clap.mp3", startTime: 0, triggerKey: 's' },
  { name: "Open-HH", link: "./assets/audio/Open-HH.mp3", startTime: 0, triggerKey: 'd' },
  { name: "Kick-n'-Hat", link: "./assets/audio/Kick_n_Hat.mp3", startTime: 0, triggerKey: 'z' },
  { name: "Kick", link: "./assets/audio/Kick.mp3", startTime: 0, triggerKey: 'x' },
  { name: "Closed-HH", link: "./assets/audio/Closed-HH.mp3", startTime: 0, triggerKey: 'c' }
]

const kit2 = [
  { name: "Alert", link: "./assets/audio/kit2/Alert.mp3", startTime: 0, triggerKey: 'q' },
  { name: "Boom", link: "./assets/audio/kit2/Boom.mp3", startTime: 0, triggerKey: 'w' },
  { name: "Dolphin", link: "./assets/audio/kit2/Dolphin.mp3", startTime: 0, triggerKey: 'e' },
  { name: "Glass", link: "./assets/audio/kit2/Glass.mp3", startTime: 0, triggerKey: 'a' },
  { name: "Reload", link: "./assets/audio/kit2/Reload.mp3", startTime: 0, triggerKey: 's' },
  { name: "Rubber-Duck", link: "./assets/audio/kit2/Rubber-Duck.mp3", startTime: 0, triggerKey: 'd' },
  { name: "Slap", link: "./assets/audio/kit2/Slap.mp3", startTime: 0, triggerKey: 'z' },
  { name: "Wilhelm", link: "./assets/audio/kit2/Wilhelm.mp3", startTime: 0, triggerKey: 'x' },
  { name: "Yeet", link: "./assets/audio/kit2/Yeet.mp3", startTime: 0, triggerKey: 'c' }
]

const kitUser = Array(9).fill().map((_, index) => ({
  name: "Upload",
  link: "",
  startTime: 0,
  triggerKey: ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'][index]
}))


function App() {
  const [currentKitIndex, setCurrentKitIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [kits, setKits] = useState([kit1, kit2, kitUser])
  const [sounds, setSounds] = useState(kits[currentKitIndex])

  useEffect(() => {
    setSounds(kits[currentKitIndex])
  }, [currentKitIndex, kits])

  const updateDisplay = (name) => {
    setDisplay(name)
  }

  const switchKit = () => {
    const nextIndex = (currentKitIndex + 1) % kits.length
    setCurrentKitIndex(nextIndex)
    setSounds(kits[nextIndex])
  }

  const updateSound = (index, link, name) => {
    setSounds((prevSounds) => {
      const newSounds = [...prevSounds]
      newSounds[index] = { ...newSounds[index], link, name }

      setKits((prevKits) => {
        const newKits = [...prevKits]
        newKits[currentKitIndex] = newSounds
        return newKits
      })

      return newSounds
    })
  }

  const updateStartTime = (index, newStartTime) => {
    setSounds((prevSounds) => {
      const newSounds = [...prevSounds]
      newSounds[index] = { ...newSounds[index], startTime: newStartTime }

      setKits((prevKits) => {
        const newKits = [...prevKits]
        newKits[currentKitIndex] = newSounds
        return newKits
      })

      return newSounds
    })
  }

  return (
    <div id="drum-machine">
      <div className="controls">
        <button onClick={switchKit}>Switch Kit</button>
      </div>
      <div className="squares-container">
        {sounds.map((sound, index) => (
          <Pad
            key={index}
            name={sound.name}
            link={sound.link}
            startTime={sound.startTime}
            triggerKey={sound.triggerKey}
            updateDisplay={updateDisplay}
            isCustomKit={currentKitIndex === 2}
            updateSound={updateSound}
            updateStartTime={updateStartTime}
            index={index}
          />
        ))}
      </div>
      <div className="display">{display}</div>
    </div>
  )
}

export default App
