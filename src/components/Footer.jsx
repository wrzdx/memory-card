import "../styles/Footer.css";
import Volume from "../assets/icons/volume.svg?react";
import VolumeOff from "../assets/icons/volume_off.svg?react";
import Music from "../assets/icons/music_sign.svg?react";
import MusicOff from "../assets/icons/music_off.svg?react";
import QuestionMark from "../assets/icons/question_mark.svg?react";
import Cross from "../assets/icons/cross.svg?react";

import { useState } from "react";
import Info from "./Info";

export default function Footer({
  isMusicPlaying,
  isSoundPlaying,
  setIsSoundPlaying,
  playClick,
  playMusic,
  stopMusic
}) {
  const [isInfoNeeded, setIsInfoNeeded] = useState(false);
  return (
    <footer className="footer">
      <button
        onClick={() => {
          playClick();
          setIsSoundPlaying(!isSoundPlaying);
        }}
      >
        {isSoundPlaying ? (
          <Volume className="svg" />
        ) : (
          <VolumeOff className="svg" />
        )}
      </button>
      <button
        onClick={() => {
          playClick();
          if (!isMusicPlaying) {
            playMusic();
          } else {
            stopMusic();
          }
        }}
      >
        {isMusicPlaying ? (
          <Music className="svg" />
        ) : (
          <MusicOff className="svg" />
        )}
      </button>
      <button onClick={() => { setIsInfoNeeded(!isInfoNeeded); playClick(); }}>
        {isInfoNeeded ? (
          <Cross className="svg" />
        ) : (
          <QuestionMark className="svg" />
        )}
      </button>

      <Info isInfoNeeded={isInfoNeeded} />
    </footer>
  );
}
