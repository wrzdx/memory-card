import "./styles/App.css";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import LoadingPage from "./pages/LoadingPage";
import { useState } from "react";

const LEVELS = {
  easy: 4,
  medium: 7,
  hard: 10,
};

function App() {
  const [pageId, setPageId] = useState("startPage");
  const [isLoading, setIsLoading] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isSoundPlaying, setIsSoundPlaying] = useState(true);
  const [level, setLevel] = useState("easy");

  const runGamePage = () => {
    setIsLoading(true);
    setPageId("gamePage");
  };

  const runStartPage = () => {
    setPageId("startPage");
  };



  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          {(pageId === "startPage" && (
            <StartPage
              configs={configs}
              setLevel={setLevel}
              runGamePage={runGamePage}
            />
          )) ||
            (pageId === "gamePage" && (
              <GamePage
                configs={configs}
                numberOfCards={LEVELS[level]}
                setIsLoading={setIsLoading}
                runStartPage={runStartPage}
                key={crypto.randomUUID()}
              />
            ))}
          <Footer
            isMusicPlaying={isMusicPlaying}
            setIsMusicPlaying={setIsMusicPlaying}
            isSoundPlaying={isSoundPlaying}
            setIsSoundPlaying={setIsSoundPlaying}
          />
        </>
      )}
    </>
  );
}

export default App;
