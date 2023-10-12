// import React from "react";
import PropTypes from 'prop-types';

export default function Pixel(props) {
  const pixelClass = `pixel ${props.pixelState ? (props.isInverted ? "white" : "black") : (props.isInverted ? "black" : "white")}`;

  return (
    <div
      className={pixelClass}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseEnter={props.onMouseEnter}
    ></div>
  );
}

Pixel.propTypes = {
  pixelState: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired, 
  onMouseEnter: PropTypes.func.isRequired,
  isInverted: PropTypes.bool.isRequired,
}
