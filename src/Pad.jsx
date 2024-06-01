// Receives sound through state



import React, { useEffect, useState } from 'react'

export default function Pad(props) {
    const [startTime, setStartTime] = useState(props.startTime)

    const playSound = () => {
        const audio = new Audio(props.link)
        audio.currentTime = startTime
        audio.play()
        props.updateDisplay(props.name)
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === props.triggerKey) {
                playSound()
            }
        }

        document.body.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.removeEventListener('keydown', handleKeyDown)
        }
    }, [props.triggerKey, props.link, startTime])

    useEffect(() => {
        setStartTime(props.startTime);
      }, [props.startTime]);

    const handleStartTimeChange = (event) => {
        const newStartTime = Number(event.target.value)
        setStartTime(newStartTime)
        props.updateStartTime(props.index, newStartTime)
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0]
        if (file) {
            const fileURL = URL.createObjectURL(file)
            props.updateSound(props.index, fileURL, file.name)
        }
    }

    return (
        <div className="pad" onClick={playSound} tabIndex="0">
            <div>{props.name}</div>
            {props.isCustomKit && (
                <label className="upload-button">
                    <input
                        type="file"
                        accept="audio/*"
                        onChange={handleFileUpload}
                    />
                    <i className="fas fa-upload"></i>
                </label>
            )}
            <input
                type="number"
                value={startTime}
                onChange={handleStartTimeChange}
                step="0.02"
                min="0"
            />
        </div>
    )
}
