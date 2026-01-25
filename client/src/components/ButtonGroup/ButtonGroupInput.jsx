import { useState } from 'react';
import styles from './ButtonGroupInput.module.sass';

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
    value: 'no',
    title: 'No',
    description: 'I am only looking for a name, not a Domain',
  },
];

const ButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>
        Do you want a matching domain (.com URL) with your name?
      </h3>

      <div className={styles.buttons}>
        {OPTIONS.map((option, index) => (
          <label
            key={option.value}
            className={`${styles.button} ${
              selectedOption === option.value ? styles.active : ''
            }`}
          >
            <input
              type="radio"
              name="domain"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => setSelectedOption(option.value)}
              className={styles.radio}
            />

            <div className={styles.content}>
              <div className={styles.buttonMainText}>
                {option.title}
                {index === 0 && (
                  <span className={styles.badge}>Recommended</span>
                )}
                <span className={styles.checkmark}></span>
              </div>

              <div className={styles.buttonSubText}>{option.description}</div>
            </div>
          </label>
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
