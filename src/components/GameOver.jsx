import Lose from "./../assets/lose.png";
import Win from "./../assets/win.png";

export default function GameOver({ isWin, restart, playClick }) {
  return (
    <div className={"gameOver" + (isWin ? " win" : " lose")}>
      <div className="pop-up">
        <h1>{isWin ? "You Win!" : "You lose!"}</h1>
        <button
          onClick={() => {
            playClick();
            restart();
          }}
        >
          Restart
        </button>
        {isWin ? (
          <img src={Win} alt="Win Picture" />
        ) : (
          <img src={Lose} alt="Lose Picture" />
        )}
      </div>
    </div>
  );
}
