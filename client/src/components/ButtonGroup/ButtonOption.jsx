import classNames from 'classnames';
import styles from './ButtonGroupInput.module.sass';

const ButtonOption = (props) => {
  const { isSelected, option, isRecomended, onChange } = props;
  return (
    <label
      className={classNames(styles.button, {
        [styles.active]: isSelected,
      })}
    >
      <input
        type="radio"
        name="domain"
        value={option.value}
        checked={isSelected}
        onChange={() => onChange(option.value)}
        className={styles.radio}
      />

      <div className={styles.content}>
        <div className={styles.buttonMainText}>
          {option.title}
          {isRecomended && <span className={styles.badge}>Recommended</span>}
          {/* <span className={styles.checkmark}></span> */}
        </div>
        <div className={styles.buttonSubText}>{option.description}</div>
      </div>
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default ButtonOption;
