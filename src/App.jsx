import React from "react";
import "./App.css";
import Pixel from "./components/Pixel";

export default function App() {
  const number = 20;
  const [pixels, setPixels] = React.useState(Array(number * number).fill(false));
  const [isDragging, setIsDragging] = React.useState(false);
  const dragStartIndex = React.useRef(null);

  const handlePixelClick = (index) => {
    if (!isDragging) {
      const updatedPixels = [...pixels];
      updatedPixels[index] = !updatedPixels[index];
      setPixels(updatedPixels);
    }
  };

  const handleMouseDown = (index) => {
    setIsDragging(true);
    dragStartIndex.current = index;
    // console.log(isDragging)

  };

  React.useEffect(() => {
    console.log(isDragging);
  }, [isDragging]);

  const handleMouseEnter = (index) => {
    if (isDragging) {
      setPixels(prevPixels => {
        const updatedPixels = [...prevPixels];
        updatedPixels[index] = !updatedPixels[index];
        return updatedPixels;
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    dragStartIndex.current = null;
  };

  return (
    <div className="grid-container">
      {pixels.map((pixelState, index) => (
        <Pixel
          key={index}
          pixelState={pixelState}
          onClick={() => handlePixelClick(index)}
          onMouseDown={() => handleMouseDown(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseUp={handleMouseUp}
        />
      ))}
    </div>
  );
}
