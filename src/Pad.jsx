import React, { useEffect, useState } from "react";

export default function Pad(props) {
  const [startTime, setStartTime] = useState(props.startTime);
  const [isPressed, setIsPressed] = useState(false);
  const [hasAudio, setHasAudio] = useState(!!props.link);

  useEffect(() => {
    setHasAudio(!!props.link); // Update hasAudio when props.link changes
  }, [props.link]);

  const playSound = () => {
    if (hasAudio) {
      const audio = new Audio(props.link);
      audio.currentTime = startTime;
      audio.play();
      props.updateDisplay(props.name);
      props.setCurrentSound({ link: props.link, startTime: startTime });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === props.triggerKey) {
        playSound();
        setIsPressed(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === props.triggerKey) {
        setIsPressed(false);
      }
    };

    document.body.addEventListener("keydown", handleKeyDown);
    document.body.addEventListener("keyup", handleKeyUp);

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
      document.body.removeEventListener("keyup", handleKeyUp);
    };
  }, [props.triggerKey, props.link, startTime]);

  useEffect(() => {
    setStartTime(props.startTime);
  }, [props.startTime]);

  const handleStartTimeChange = (event) => {
    const newStartTime = Number(event.target.value);
    setStartTime(newStartTime);
    props.updateStartTime(props.index, newStartTime);
    props.setCurrentSound({ link: props.link, startTime: newStartTime });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      const fileNameWithoutExtension = file.name.replace(/\.[^/.]+$/, "");
      props.updateSound(props.index, fileURL, fileNameWithoutExtension);
      props.setCurrentSound({ link: fileURL, startTime: 0 });
      setHasAudio(true);
    }
  };

  return (
    <div
      className={`pad ${isPressed ? "pressed" : ""} ${
        !hasAudio && props.isCustomKit ? "no-audio" : ""
      }`}
      onClick={() => {
        playSound();
        setIsPressed(true);
        setTimeout(() => setIsPressed(false), 200);
      }}
      tabIndex="0"
    >
      <div className="pad-name">
        {hasAudio ? props.name : props.isCustomKit ? "UPLOAD" : props.name}
      </div>
      <div
        className={`controls-container ${
          props.isCustomKit ? "" : "center-controls"
        }`}
      >
        <input
          type="number"
          value={startTime}
          onChange={handleStartTimeChange}
          step="0.01"
          min="0"
        />
        {props.isCustomKit && (
          <label className="upload-button">
            <input type="file" accept="audio/*" onChange={handleFileUpload} />
            <i className="fas fa-upload"></i>
          </label>
        )}
      </div>
    </div>
  );
}
