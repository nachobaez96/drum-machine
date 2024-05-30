// Receives sound through state



import React, { useEffect } from 'react'

export default function Pad(props) {

    const playSound = () => {
        const audio = new Audio(props.link)
        audio.play()
        props.updateDisplay(props.name)
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === props.triggerKey) {
                playSound()
            }
        };

        document.body.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.removeEventListener('keydown', handleKeyDown)
        }
    }, [props.triggerKey, props.link])

    return (
        <div className="pad" onClick={playSound} tabIndex="0">
            {props.name}
        </div>
    )
}
