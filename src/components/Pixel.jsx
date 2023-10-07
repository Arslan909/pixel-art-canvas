// import React from "react";
import PropTypes from 'prop-types';

export default function Pixel(props) {
  return (
    <div
      className={`pixel ${props.pixelState ? "black" : ""}`}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown} // Added onMouseDown event
      onMouseEnter={props.onMouseEnter} // Added onMouseEnter event
    ></div>
  );
}

Pixel.propTypes = {
  pixelState: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired, 
  onMouseEnter: PropTypes.func.isRequired
}