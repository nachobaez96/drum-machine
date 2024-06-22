import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

function Waveform({ audioLink, startTime, onStartTimeChange }) {
  const waveformRef = useRef(null);
  const waveSurferRef = useRef(null);
  const timeoutRef = useRef(null);

  const destroyWaveform = () => {
    if (waveSurferRef.current) {
      waveSurferRef.current.destroy();
      waveSurferRef.current = null;
    }
  };

  const clearWaveformTimeout = () => {
    // timeout is not being used
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    if (waveSurferRef.current) {
      destroyWaveform();
    }

    waveSurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "violet",
      progressColor: "purple",
      cursorColor: "rgba(255, 0, 0, 0.5)",
      barWidth: 2,
      barHeight: 1,
      barGap: null,
      audioRate: 1,
      interact: false,
      responsive: true,
      height: 100,
    });

    waveSurferRef.current.load(audioLink);

    waveSurferRef.current.on("ready", () => {
      const totalDuration = waveSurferRef.current.getDuration();
      const startPosition = startTime / totalDuration;
      waveSurferRef.current.seekTo(startPosition);
    });

    waveSurferRef.current.on("seek", (progress) => {
      onStartTimeChange(progress);
    });

    clearWaveformTimeout();

    return () => {
      destroyWaveform();
      clearWaveformTimeout();
    };
  }, [audioLink, startTime, onStartTimeChange]);

  return (
    <div className="waveform-container">
      <div ref={waveformRef}></div>
    </div>
  );
}

export default Waveform;
