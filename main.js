let hover = document.getElementById("random-btn");
let lastSelect;

let lucky = [
  "I'm Feeling Puzzled",
  "I'm Feeling Hungry",
  "I'm Feeling Doodley",
  "I'm Feeling Generous",
  "I'm Feeling Playful",
];
let random = () => {
  let select = lucky[Math.floor(Math.random() * lucky.length)];
  if (select === lastSelect) {
    return random();
  }
  lastSelect = select;
  hover.innerHTML = select;
};

hover.addEventListener("mouseover", random);
