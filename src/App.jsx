import "./styles/App.css";
import Video from "./assets/background.mp4";
import Sound from "./assets/sounds/click.wav";
import Music from "./assets/sounds/overtaken.mp3";

import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import LoadingPage from "./pages/LoadingPage";
import { useState } from "react";
import Footer from "./components/Footer";
import useSound from "use-sound";

function App() {
  const [pageId, setPageId] = useState("startPage");
  const [isLoading, setIsLoading] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isSoundPlaying, setIsSoundPlaying] = useState(true);
  const [level, setLevel] = useState("easy");
  const [gameId, setGameId] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const restart = () => {
    setPageId("gamePage");
    setGameId(crypto.randomUUID());
  }

  const runNewGame = (selectedLevel) => {
    setLevel(selectedLevel);
    restart()
    setBestScore(0)
  };

  const runStartPage = () => {
    setPageId("startPage");
  };

  const [playClick] = useSound(Sound, {
    volume: 0.25,
    soundEnabled: isSoundPlaying,
  });
  const [playMusic, { stop }] = useSound(Music, {
    volume: 0.5,
    loop: true,
    onend: () => setIsMusicPlaying(false),
  });

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          {(pageId === "startPage" && (
            <StartPage runNewGame={runNewGame} playClick={playClick} />
          )) ||
            (pageId === "gamePage" && (
              <GamePage
                key={gameId}
                level={level}
                playClick={playClick}
                runStartPage={runStartPage}
                restart={restart}
                bestScore={bestScore}
                setBestScore={setBestScore}
              />
            ))}
          <Footer
            isMusicPlaying={isMusicPlaying}
            isSoundPlaying={isSoundPlaying}
            setIsSoundPlaying={setIsSoundPlaying}
            playClick={playClick}
            playMusic={() => {
              playMusic();
              setIsMusicPlaying(true);
            }}
            stopMusic={() => {
              stop();
              setIsMusicPlaying(false);
            }}
          />
        </>
      )}
      <video autoPlay muted loop id="myVideo">
        <source src={Video} type="video/mp4" />
      </video>
    </>
  );
}

export default App;
