import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let greeting;
  if(currentTime < 12){ 
  greeting = "Good morning."
} else if ( currentTime < 18) {
  greeting = "Good afternoon."
}else{
  greeting = "Good evening."
}

ReactDOM.render(
  <h1> {greeting}</h1>
  ,document.getElementById("root")
  );