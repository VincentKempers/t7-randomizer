const characters = [
  {
    "name": "akuma",
    "label": "Akuma",
    "img": "imgs/chars/akuma.png"
  },
  {
    "name": "alisa",
    "label": "Alisa",
    "img": "imgs/chars/alysaa.png"
  },
  {
    "name": "anna",
    "label": "Anna",
    "img": "imgs/chars/anna.png"
  },
  {
    "name": "armorKing",
    "label": "Armor King",
    "img": "imgs/chars/armoredking.png"
  },
  {
    "name": "asuka",
    "label": "Asuka",
    "img": "imgs/chars/asuka.png"
  },
  {
    "name": "bob",
    "label": "Bob",
    "img": "imgs/chars/bob.png"
  },
  {
    "name": "bryan",
    "label": "Bryan",
    "img": "imgs/chars/bryan.png"
  },
  {
    "name": "claudio",
    "label": "Claudio",
    "img": "imgs/chars/claudio.png"
  },
  {
    "name": "devilJin",
    "label": "Devil Jin",
    "img": "imgs/chars/devil-jin.png"
  },
  {
    "name": "dragunov",
    "label": "Dragunov",
    "img": "imgs/chars/dragunov.png"
  },
  {
    "name": "eddy",
    "label": "Eddy",
    "img": "imgs/chars/eddy.png"
  },
  {
    "name": "eliza",
    "label": "Eliza",
    "img": "imgs/chars/eliza.png"
  },
  {
    "name": "feng",
    "label": "Feng",
    "img": "imgs/chars/feng.png"
  },
  {
    "name": "ganryu",
    "label": "Ganryu",
    "img": "imgs/chars/ganryu.png"
  },
  {
    "name": "geese",
    "label": "Geese",
    "img": "imgs/chars/geese.png"
  },
  {
    "name": "gigas",
    "label": "Gigas",
    "img": "imgs/chars/gigas.png"
  },
  {
    "name": "heihachi",
    "label": "Heihachi",
    "img": "imgs/chars/heihachi.png"
  },
  {
    "name": "hwoarang",
    "label": "Hwoarang",
    "img": "imgs/chars/hwroang.png"
  },
  {
    "name": "jack7",
    "label": "Jack 7",
    "img": "imgs/chars/jack.png"
  },
  {
    "name": "jin",
    "label": "Jin",
    "img": "imgs/chars/jin.png"
  },
  {
    "name": "josie",
    "label": "Josie",
    "img": "imgs/chars/josie.png"
  },
  {
    "name": "julia",
    "label": "Julia",
    "img": "imgs/chars/julia.png"
  },
  {
    "name": "katarina",
    "label": "Katarina",
    "img": "imgs/chars/katarina.png"
  },
  {
    "name": "kazumi",
    "label": "Kazumi",
    "img": "imgs/chars/kazumi.png"
  },
  {
    "name": "kazuya",
    "label": "Kazuya",
    "img": "imgs/chars/kazuya.png"
  },
  {
    "name": "king",
    "label": "King",
    "img": "imgs/chars/king.png"
  },
  {
    "name": "kuma",
    "label": "Kuma",
    "img": "imgs/chars/kuma-mishima.png"
  },
  {
    "name": "lars",
    "label": "Lars",
    "img": "imgs/chars/lars.png"
  },
  {
    "name": "law",
    "label": "Law",
    "img": "imgs/chars/law.png"
  },
  {
    "name": "lee",
    "label": "Lee",
    "img": "imgs/chars/lee_chaolin_tekken_7_render_cutout_by_deadlypoisonbeauty_db3lqhh-fullview.png"
  },
  {
    "name": "lei",
    "label": "Lei",
    "img": "imgs/chars/lei.png"
  },
  {
    "name": "leo",
    "label": "Leo",
    "img": "imgs/chars/leo.png"
  },
  {
    "name": "leroy",
    "label": "Leroy",
    "img": "imgs/chars/"
  },
  {
    "name": "lili",
    "label": "Lili",
    "img": "imgs/chars/lili.png"
  },
  {
    "name": "luckyChloe",
    "label": "Lucky Chloe",
    "img": "imgs/chars/luckychloe.png"
  },
  {
    "name": "marduk",
    "label": "Marduk",
    "img": "imgs/chars/marduk.png"
  },
  {
    "name": "masterRaven",
    "label": "Master Raven",
    "img": "imgs/chars/masterraven.png"
  },
  {
    "name": "miguel",
    "label": "Miguel",
    "img": "imgs/chars/miguel.png"
  },
  {
    "name": "negan",
    "label": "Negan",
    "img": "imgs/chars/negan.png"
  },
  {
    "name": "nina",
    "label": "Nina",
    "img": "imgs/chars/nina.png"
  },
  {
    "name": "noctis",
    "label": "Noctis",
    "img": "imgs/chars/noctis.png"
  },
  {
    "name": "paul",
    "label": "Paul",
    "img": "imgs/chars/paul.png"
  },
  {
    "name": "shaheen",
    "label": "Shaheen",
    "img": "imgs/chars/shaheen.png"
  },
  {
    "name": "steve",
    "label": "Steve",
    "img": "imgs/chars/steve-fox.png"
  },
  {
    "name": "xiaoyu",
    "label": "Xiaoyu",
    "img": "imgs/chars/xiao.png"
  },
  {
    "name": "yoshimitsu",
    "label": "Yoshimitsu",
    "img": "imgs/chars/yoshimitsu.png"
  },
  {
    "name": "zafina",
    "label": "Zafina",
    "img": "imgs/chars/zafina_tekken_7_cutout_png_render_by_deadlypoisonbeauty_dde5t7p-fullview.png"
  },
  {
    "name": "Fahkumram",
    "label": "Fahkumram",
    "img": "imgs/chars/Fahkumram.jpg"
  },
];

// variables
const charLabel = document.getElementById('charLabel');
const randomButton = document.querySelector('.random');
const switchMode = document.querySelector('.switch-mode');
const createdImg = document.querySelector('#charImg');
console.log(switchMode)
const htmlParent = document.querySelector('html');

// dark mode switcher
const switcher = () => {
  htmlParent.toggleAttribute("data-theme", "dark");
};

// randomizer
function randomizeCharacters() {
  let chosenCharacter = characters[Math.floor(characters.length * Math.random())];
  console.log(charLabel);
  createdImg.src= chosenCharacter.img;
  charLabel.innerHTML = `${chosenCharacter.label}`;
};

// events
window.addEventListener('keydown', (event) => {
  console.log(event);
  if (event.code === "Space") {
    randomizeCharacters();
  }
}, true);


randomButton.addEventListener('click', randomizeCharacters, true);
switchMode.addEventListener('click', switcher, true);
