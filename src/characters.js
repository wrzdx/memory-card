import LUFFY from "./assets/characters/LUFFY.png";
import ZORO from "./assets/characters/ZORO.png";
import NAMI from "./assets/characters/NAMI.png";
import USOPP from "./assets/characters/USOPP.png";
import SANJI from "./assets/characters/SANJI.png";
import CHOPPER from "./assets/characters/CHOPPER.png";
import ROBIN from "./assets/characters/ROBIN.png";
import FRANKY from "./assets/characters/FRANKY.png";
import BROOK from "./assets/characters/BROOK.png";
import JINBEI from "./assets/characters/JINBEI.png";

const characters = [
  {
    name: "Luffy",
    src: LUFFY,
    clicked: false,
  },
  {
    name: "Zoro",
    src: ZORO,
    clicked: false,
  },
  {
    name: "Nami",
    src: NAMI,
    clicked: false,
  },
  {
    name: "Usopp",
    src: USOPP,
    clicked: false,
  },
  {
    name: "Sanji",
    src: SANJI,
    clicked: false,
  },
  {
    name: "Chopper",
    src: CHOPPER,
    clicked: false,
  },
  {
    name: "Robin",
    src: ROBIN,
    clicked: false,
  },
  {
    name: "Franky",
    src: FRANKY,
    clicked: false,
  },
  {
    name: "Brook",
    src: BROOK,
    clicked: false,
  },
  {
    name: "Jinbei",
    src: JINBEI,
    clicked: false,
  },
];

export default function getCharacters() {
  return [...characters];
}
