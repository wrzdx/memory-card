import "./../styles/StartPage.css";
import Logo from "../assets/one-piece-logo.png";

export default function StartPage({ runNewGame, playClick }) {
  return (
    <div className="startPage">
      <img src={Logo} alt="One Piece Logo" />
      <h1>Memory Game</h1>
      <div className="levels">
        <button
          onClick={() => {
            playClick();
            runNewGame("easy");
          }}
        >
          Easy
        </button>
        <button
          onClick={() => {
            playClick();
            runNewGame("medium");
          }}
        >
          Medium
        </button>
        <button
          onClick={() => {
            playClick();
            runNewGame("hard");
          }}
        >
          Hard
        </button>
      </div>
    </div>
  );
}
