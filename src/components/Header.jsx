import Logo from "../assets/one-piece-logo.png";

export default function Header({ runStartPage, score, bestScore, playClick }) {
  return (
    <header className="header">
      <button onClick={playClick}>
        <img src={Logo} alt="One Piece Logo" onClick={runStartPage} />
      </button>
      <div className="scores">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
}
