
import React from 'react';
import styles from './ButtonGruop.module.sass';
import CONSTANTS from '../../constants';

const ButtonGruop = props => {
  const defaultPathToImages = `${CONSTANTS.STATIC_IMAGES_PATH}contestLabels/`;

  const renderImage = () => {
    return props.path.map((imgPath, i) => (
      <img
        key={i}
        src={`${defaultPathToImages}${imgPath}`}
        className={styles.imgButtonContainer}
        alt={imgPath.replace(/.svg/g, 'SVG Icon')}
      />
    ));
  };

  const getBackClass = () =>
    props.path.length === 1 ? ' ' : ` ${styles.combinedBundle}`;

  const { setBundle, header, describe } = props;
  return (
    <div
      onClick={() => setBundle(header)}
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
