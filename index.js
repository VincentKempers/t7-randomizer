const characters = [
  {
    "name": "akuma",
    "label": "Akuma",
    "img": ""
  },
  {
    "name": "alisa",
    "label": "Alisa",
    "img": ""
  },
  {
    "name": "anna",
    "label": "Anna",
    "img": ""
  },
  {
    "name": "armorKing",
    "label": "Armor King",
    "img": ""
  },
  {
    "name": "asuka",
    "label": "Asuka",
    "img": ""
  },
  {
    "name": "bob",
    "label": "Bob",
    "img": ""
  },
  {
    "name": "bryan",
    "label": "Bryan",
    "img": ""
  },
  {
    "name": "claudio",
    "label": "Claudio",
    "img": ""
  },
  {
    "name": "devilJin",
    "label": "Devil Jin",
    "img": ""
  },
  {
    "name": "dragunov",
    "label": "Dragunov",
    "img": ""
  },
  {
    "name": "eddy",
    "label": "Eddy",
    "img": ""
  },
  {
    "name": "eliza",
    "label": "Eliza",
    "img": ""
  },
  {
    "name": "feng",
    "label": "Feng",
    "img": ""
  },
  {
    "name": "ganryu",
    "label": "Ganryu",
    "img": ""
  },
  {
    "name": "geese",
    "label": "Geese",
    "img": ""
  },
  {
    "name": "gigas",
    "label": "Gigas",
    "img": ""
  },
  {
    "name": "heihachi",
    "label": "Heihachi",
    "img": ""
  },
  {
    "name": "hwoarang",
    "label": "Hwoarang",
    "img": ""
  },
  {
    "name": "jack7",
    "label": "Jack 7",
    "img": ""
  },
  {
    "name": "jin",
    "label": "Jin",
    "img": ""
  },
  {
    "name": "josie",
    "label": "Josie",
    "img": ""
  },
  {
    "name": "julia",
    "label": "Julia",
    "img": ""
  },
  {
    "name": "katarina",
    "label": "Katarina",
    "img": ""
  },
  {
    "name": "kazumi",
    "label": "Kazumi",
    "img": ""
  },
  {
    "name": "kazuya",
    "label": "Kazuya",
    "img": ""
  },
  {
    "name": "king",
    "label": "King",
    "img": ""
  },
  {
    "name": "kuma",
    "label": "Kuma",
    "img": ""
  },
  {
    "name": "lars",
    "label": "Lars",
    "img": ""
  },
  {
    "name": "law",
    "label": "Law",
    "img": ""
  },
  {
    "name": "lee",
    "label": "Lee",
    "img": ""
  },
  {
    "name": "lei",
    "label": "Lei",
    "img": ""
  },
  {
    "name": "leo",
    "label": "Leo",
    "img": ""
  },
  {
    "name": "leroy",
    "label": "Leroy",
    "img": ""
  },
  {
    "name": "lili",
    "label": "Lili",
    "img": ""
  },
  {
    "name": "luckyChloe",
    "label": "Lucky Chloe",
    "img": ""
  },
  {
    "name": "marduk",
    "label": "Marduk",
    "img": ""
  },
  {
    "name": "masterRaven",
    "label": "Master Raven",
    "img": ""
  },
  {
    "name": "miguel",
    "label": "Miguel",
    "img": ""
  },
  {
    "name": "negan",
    "label": "Negan",
    "img": ""
  },
  {
    "name": "nina",
    "label": "Nina",
    "img": ""
  },
  {
    "name": "noctis",
    "label": "Noctis",
    "img": ""
  },
  {
    "name": "paul",
    "label": "Paul",
    "img": ""
  },
  {
    "name": "shaheen",
    "label": "Shaheen",
    "img": ""
  },
  {
    "name": "steve",
    "label": "Steve",
    "img": ""
  },
  {
    "name": "xiaoyu",
    "label": "Xiaoyu",
    "img": ""
  },
  {
    "name": "yoshimitsu",
    "label": "Yoshimitsu",
    "img": ""
  },
  {
    "name": "zafina",
    "label": "Zafina",
    "img": ""
  },
];

function randomizeCharacters() {
  console.log(characters[Math.floor(characters.length * Math.random())]);
  console.log('vincent');
};

document.addEventListener('click', randomizeCharacters, true);

randomizeCharacters();