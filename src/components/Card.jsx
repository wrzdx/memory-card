import Tilt from "react-parallax-tilt";

import Backface from "../assets/characters/BACKFACE.jpeg";

export default function Card({ character, isFlipped, clickHandle }) {
  return (
    <div className={isFlipped ? "card flipped" : "card"} onClick={clickHandle}>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.6}
        glareColor="#ffffff"
        className="tilt"
        glareBorderRadius="1.2rem"
      >
        <div className="cardFace">
          <img src={character.src} alt={character.name} />
        </div>
        <div className="cardBack">
          <img src={Backface} alt="Card Backface" />
        </div>
      </Tilt>
    </div>
  );
}
