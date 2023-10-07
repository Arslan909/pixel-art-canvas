// import React from "react";
import PropTypes from 'prop-types';

export default function Pixel(props) {
  return (
    <div
      className={`pixel ${props.pixelState ? "black" : ""}`}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseEnter={props.onMouseEnter}
      onMouseUp={props.onMouseUp}
    ></div>
  );
}

Pixel.propTypes = {
  pixelState: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired, 
  onMouseEnter: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired
}