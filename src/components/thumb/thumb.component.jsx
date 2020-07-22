import React from "react";
import styles from './thumb.styles.scss';

const Thumb = (props) => {
  const newLabel = props.isNew ? 'new' : '';
  const highlimitLabel = props.isHighLimit ? 'highlimit' : '';

  return (
    <figure
      className={`thumb ${props.className} ${newLabel} ${highlimitLabel}`}
      style={{backgroundImage: `url(./assets/images/games/${props.image})`}}
    >
      <img src={`./assets/images/games/${props.image}`}
           className="game-img" alt={props.name}/>
    </figure>
  )
};

export default Thumb;
