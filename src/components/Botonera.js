import React from "react";
import "./Botonera.css";
import * as ColorAppAction from "../actions/colorAppActions";

export const Botonera = () => {
  const buttonClick = (color) => {
    ColorAppAction.changeColor(color);
  };

  return (
    <div className="botonera">
      <button onClick={() => buttonClick("red")}>Rojo</button>
      <button onClick={() => buttonClick("green")}>Verde</button>
    </div>
  );
};
