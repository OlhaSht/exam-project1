import { useState } from 'react';
import styles from './ButtonGroup.module.sass';

const OPTIONS = [
  {
    value: 'yes-variation',
    title: 'Yes',
    description: 'But minor variations are allowed',
  },
  {
    value: 'yes-exact',
    title: 'Yes',
    description: 'The Domain should exactly match the name',
  },
  {
    value: 'No',
    title: 'No',
    description: 'I am only looking for a name, not a Domain',
  },
];

const ButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (value) => {
    setSelectedOption(value);
  };

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>
        Do you want a matching domain (.com URL) with your name?
      </h3>

      <div className={styles.buttons}>
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`${styles.button} ${
              selectedOption === option.value ? styles.active : ''
            }`}
            onClick={() => handleClick(option.value)}
          >
            <div className={styles.buttonMainText}>{option.title}</div>
            <div className={styles.buttonSubText}>{option.description}</div>
          </button>
        ))}
      </div>

      <p className={styles.hint}>
        If you want a matching domain, our platform will only accept those name
        suggestions where the domain is available.
      </p>
    </section>
  );
};

export default ButtonGroup;
