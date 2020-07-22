import React, {useState} from "react";
import styles from './buttonWithImage.styles.css';

const ButtonWithImage = ({img, activeImg, text, clickHandler, isActiveDefault}) => {
  const [isActive, setIsActive] = useState(isActiveDefault || false);
  return (
    <a className={isActive ? "btn-image active" : "btn-image"} onClick={() => {
      setIsActive(!isActive);
      clickHandler();
    }} >
      <img src={isActive ? activeImg : img}/>
      <span>{text}</span>
    </a>
  )
};

export default ButtonWithImage;
