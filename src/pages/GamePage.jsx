import "../styles/GamePage.css";
import Header from "../components/Header";
import getCharacters from "../characters.js";

import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import GameOver from "../components/GameOver.jsx";

const LEVELS = {
  easy: 5,
  medium: 7,
  hard: 10,
};

function getChararctersToShow(numberOfCardsToShow, characters) {
  const charactersToShow = [];
  const usedIndices = new Set();
  const getUnclickedCharacter = () => {
    return characters.find(
      (char, idx) => !char.clicked && !usedIndices.has(idx)
    );
  };

  for (let i = 0; i < numberOfCardsToShow; i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * characters.length);
    } while (usedIndices.has(randomIndex));
    usedIndices.add(randomIndex);
    charactersToShow.push(characters[randomIndex]);
  }

  const isThereUnclickedCharacter = characters.some((char) => !char.clicked);
  if (!isThereUnclickedCharacter) {
    const unclickedCharacter = getUnclickedCharacter();
    if (!unclickedCharacter) return charactersToShow;
    const replaceIndex = Math.floor(Math.random() * charactersToShow.length);
    charactersToShow[replaceIndex] = unclickedCharacter;
  }

  return charactersToShow;
}

export default function GamePage({
  level,
  playClick,
  runStartPage,
  bestScore,
  setBestScore,
  restart,
}) {
  const [score, setScore] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const numberOfCards = LEVELS[level];
  const numberOfCardsToShow = Math.ceil(numberOfCards / 2);
  const [characters, setCharacters] = useState(getCharacters());

  const [charactersToShow, setCharactersToShow] = useState(
    getChararctersToShow(numberOfCardsToShow, characters)
  );

  const handleCardClick = (character) => {
    if (!character.clicked) {
      const newCharacters = characters.map((char) =>
        char.name === character.name ? { ...char, clicked: true } : char
      );
      setCharacters(newCharacters);
      setScore(score + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
      if (score + 1 === numberOfCards) {
        setResultMessage("win");
        return;
      }
      setIsClicked(true);
      if (isClicked) return;
      setTimeout(() => {
        setIsClicked(false);
        setCharactersToShow(
          getChararctersToShow(numberOfCardsToShow, newCharacters)
        );
      }, 1000);
    } else {
      setResultMessage("lose");
    }
  };

  return (
    <div className="gamePage">
      <Header
        runStartPage={runStartPage}
        score={score}
        bestScore={bestScore}
        playClick={playClick}
      />
      <div className="playGround">
        <div className="cards">
          {charactersToShow.map((character, idx) => (
            <Card
              key={idx}
              character={character}
              isFlipped={isClicked}
              clickHandle={() => {
                handleCardClick(character);
              }}
            />
          ))}
        </div>
        <p>
          {score + 1} / {numberOfCards}
        </p>
      </div>
      {resultMessage && (
        <GameOver
          isWin={resultMessage === "win"}
          restart={restart}
          playClick={playClick}
        />
      )}
    </div>
  );
}
