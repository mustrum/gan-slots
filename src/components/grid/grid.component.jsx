import React from "react";
import styles from './grid.styles.css';

const Grid = (props) => {
  return (
    <div className="grid">
      {props.children}
    </div>
  )
};

export default Grid;
