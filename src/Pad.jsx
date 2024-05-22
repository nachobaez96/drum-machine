// Receives sound through state



import React from 'react'

export default function Pad(props) {

    const playSound = () => {
        const audio = new Audio(props.link)
        audio.play()
    }

    return (
        <div className="pad" onClick={playSound}>
            {props.name}
        </div>
    )
}
