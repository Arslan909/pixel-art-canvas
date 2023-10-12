import React, { useState } from "react";
import "./App.css";
import Pixel from "./components/Pixel";

export default function App() {
  const number = 20;
  const [pixels, setPixels] = useState(Array(number * number).fill(false));
  const [isDragging, setIsDragging] = useState(false);
  const [isInverted, setIsInverted] = useState(false); // State for color inversion


  const handlePixelClick = (index) => {
      const updatedPixels = [...pixels];
      updatedPixels[index] = !updatedPixels[index];
      setPixels(updatedPixels);
  };

  const handleMouseDown = (index,event) => {
    event.preventDefault();
    setIsDragging(true);
    handleMouseEnter(index)
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (isDragging) {
      const updatedPixels = [...pixels];
      if (isInverted) {
        updatedPixels[index] = !updatedPixels[index];
      } else {
        updatedPixels[index] = !updatedPixels[index];
      }
      setPixels(updatedPixels);
    }
  };
  
  const handleInvertChange = () => {
    setIsInverted(!isInverted);
  };

  return (
    <div className="container">
      <div className="controls">
        <label>
          Invert Colors:   
          <input type="checkbox" checked={isInverted} onChange={handleInvertChange}  className="checkBox"/>
        </label>
      </div>
      <div className="grid-container">
        {pixels.map((pixelState, index) => (
          <Pixel
            key={index}
            pixelState={pixelState}
            onClick={() => handlePixelClick(index)}
            onMouseDown={(event) => handleMouseDown(index, event)}
            onMouseEnter={() => handleMouseEnter(index)}
            isInverted={isInverted}
          />
        ))}
      </div>
    </div>
  );
}
