import LuffyWithHat from "../assets/luffy-with-hat.png";

export default function Info({ isInfoNeeded }) {
  return (
    <div className={`info ${isInfoNeeded ? "" : "hidden"}`}>
      <p>Don't click on the same card twice!</p>
      <p>Click on ONE PIECE logo to go back.</p>
      <img src={LuffyWithHat} alt="Luffy with hat" />
    </div>
  );
}
