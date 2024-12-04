import React, { useState, useEffect } from "react";
import "./App.css";

const drumSounds = [
  { key: "Q", sound: "Heater 1", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" },
  { key: "W", sound: "Heater 2", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" },
  { key: "E", sound: "Heater 3", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" },
  { key: "A", sound: "Heater 4", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" },
  { key: "S", sound: "Clap", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" },
  { key: "D", sound: "Open-HH", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" },
  { key: "Z", sound: "Kick-n'-hat", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" },
  { key: "X", sound: "Kick", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" },
  { key: "C", sound: "Closed-HH", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" },
];

function App() {
  const [display, setDisplay] = useState("");

  const playSound = (key, sound) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0; 
    audio.play();
    setDisplay(sound);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const drumPad = drumSounds.find((pad) => pad.key === e.key.toUpperCase());
      if (drumPad) {
        playSound(drumPad.key, drumPad.sound);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="pad-container">
        {drumSounds.map((pad) => (
          <button
            key={pad.key}
            id={pad.sound}
            className="drum-pad"
            onClick={() => playSound(pad.key, pad.sound)}
          >
            {pad.key}
            <audio id={pad.key} className="clip" src={pad.src}></audio>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
