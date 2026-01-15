import "./../styles/StartPage.css";
import Logo from "../assets/one-piece-logo.png";

export default function StartPage() {
  return <div className="startPage">
    <img src={Logo} alt="One Piece Logo" />
    <h1>Memory Game</h1>
    <div className="levels">
      <button>Easy</button>
      <button>Medium</button>
      <button>Hard</button>
    </div>
  </div>;
}
