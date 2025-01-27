/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let noun = ["The dog ", "The man ", "The woman ", "The father "];
  let verb = ["ate ", "caught ", "found ", "stole "];
  let object = ["the ball ", "a sandwich ", "a cat ", "a lightsaber"];
  let time = ["this afternoon.", "yesterday.", "this morning.", "just now."];

  let random1 = Math.floor(Math.random() * noun.length);
  let random2 = Math.floor(Math.random() * verb.length);
  let random3 = Math.floor(Math.random() * object.length);
  let random4 = Math.floor(Math.random() * time.length);

  document.querySelector(".excuse").innerHTML =
    noun[random1] + verb[random2] + object[random3] + time[random4];

  console.log("Hello Rigo from the console!");
};
