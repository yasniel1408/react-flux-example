import React, { useEffect, useState } from "react";
import "./Caja.css";

import colorAppStore from "../stores/colorAppStore";

export const Caja = () => {
  const [color, setColor] = useState(colorAppStore.getActiveColor());

  useEffect(() => {
    colorAppStore.on("storeUpdated", () => {
      setColor(colorAppStore.getActiveColor());
    });
    return () => {
      colorAppStore.removeListener("storeUpdated");
    };
  }, []);

  return (
    <div className="caja">
      <div className="color-container" style={{ background: color }}></div>
    </div>
  );
};
