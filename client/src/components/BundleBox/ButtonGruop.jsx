import React from 'react';
import styles from './ButtonGruop.module.sass';
import CONSTANTS from '../../constants';

const ButtonGruop = props => {
  const defaultPathToImages = `${CONSTANTS.STATIC_IMAGES_PATH}contestLabels/`;

  const renderImage = () => {
    const array = [];
    for (let i = 0; i < props.path.length; i++) {
      array.push(
        <img
          src={`${defaultPathToImages}${props.path[i]}`}
          key={i}
          className={styles.imgContainer}
          alt={props.path[i].replace(/.svg/g, 'SVG Icon')}
        />
      );
    }
    return array;
  };

  const mouseOverHandler = () => {
    const element = document.getElementById(props.header);
    for (let i = 0; i < element.children[0].children.length; i++) {
      element.children[0].children[
        i
      ].src = `${defaultPathToImages}blue_${props.path[i]}`;
    }
  };

  const mouseOutHandler = () => {
    const element = document.getElementById(props.header);
    for (let i = 0; i < element.children[0].children.length; i++) {
      element.children[0].children[i].src = defaultPathToImages + props.path[i];
    }
  };

  const getBackClass = () =>
    props.path.length === 1 ? ' ' : ` ${styles.combinedBundle}`;

  const { setBundle, header, describe } = props;
  return (
    <div
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      onClick={() => setBundle(header)}
      id={header}
      className={styles.buttonContainer + getBackClass()}
    >
      <div>{renderImage()}</div>
      <div className={styles.arrow}></div>
      <div className={styles.infoButtonContainer}>
        <span className={styles.buttonName}>{header}</span>
        <span className={styles.infoButton}>{describe}</span>
      </div>
    </div>
  );
};

export default ButtonGruop;
