/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "My perro",
  "La tortuga Ninja",
  "El gato del vecino",
  "El loro de la plaza",
  "Mi iguana",
  "La ardilla del árbol"
];
let what = [
  "se comió el cable del rutter",
  "me mordió el dedo gordo",
  "me robó el café",
  "se durmió sobre el PC"
];
let when = [
  "mientras fui a la compra",
  "cuando yo estaba durmiendo",
  "justo al enviar la tarea",
  "durante la mañana"
];

let excusa = "";
function generadorExcusa() {
  let random = el => el[Math.floor(Math.random() * (el.length - 1))];
  let quien = random(who);
  let que = random(what);
  let como = random(when);
  excusa = `${quien} ${que} ${como}`;
  return excusa;
}
const getRandomNumber = maxNum => {
  return Math.floor(Math.random() * maxNum);
};

const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);

  return `hsl(${h}deg, ${s}%, ${l}%)`;
};

const setBackgroundColor = () => {
  const randomColor = getRandomColor();
  document.getElementById("excuse").style.backgroundColor = randomColor;
};
setBackgroundColor();

excusa = document.getElementById("excuse");
excusa.innerHTML = generadorExcusa();

function generarImagen() {
  if (excusa.includes("perro")) {
    document.getElementById("imagen").src = "img/whippet.jpeg";
  } else if (excusa.includes("gato")) {
    document.getElementById("imagen").src = "img/gato.jpeg";
  } else if (excusa.includes("tortuga")) {
    document.getElementById("imagen").src = "img/tortuga.jpeg";
  } else if (excusa.includes("iguana")) {
    document.getElementById("imagen").src = "img/iguana.jpeg";
  } else if (excusa.includes("ardilla")) {
    document.getElementById("imagen").src = "img/ardilla.jpeg";
  } else {
    document.getElementById("imagen").src = "img/loro.jpeg";
  }
}
generarImagen();
