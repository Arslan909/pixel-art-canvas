import React from "react";
import "./App.css";
import Pixel from "./components/Pixel";

export default function App() {
  const number = 20;
  const [pixels, setPixels] = React.useState(Array(number * number).fill(false));


  console.log(pixels)

  return (
    <div className="grid-container">

    </div>
  );
}
