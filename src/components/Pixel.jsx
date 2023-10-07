// import React from "react";
import PropTypes from 'prop-types';

export default function Pixel(props) {
  
  return (
    <div
      className={`pixel ${props.pixelState ? "black" : ""}`}
      onClick={props.onClick}
    ></div>
  );
}

Pixel.propTypes = {
  pixelState: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
