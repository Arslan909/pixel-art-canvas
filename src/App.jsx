import React from "react";
import "./App.css";
import Pixel from "./components/Pixel";

export default function App() {
  const number = 20;
  const [pixels, setPixels] = React.useState(Array(number * number).fill(false));

  const handlePixelClick = (index) => {
    const updatedPixels = [...pixels];
    updatedPixels[index] = !updatedPixels[index];
    setPixels(updatedPixels);
  };


  return (
    <div className="grid-container">
    {pixels.map((pixelState, index) => (
        <Pixel
          key={index}
          pixelState={pixelState}
          onClick={() => handlePixelClick(index)}
        />
      ))}

    </div>
  );
}
