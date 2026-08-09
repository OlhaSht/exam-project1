import { useState } from 'react';
import classNames from 'classnames';
import styles from './ButtonGroupInput.module.sass';
import ButtonOption from './ButtonOption';

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
  const [selectedOption, setSelectedOption] = useState('yes-variation');

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>
        Do you want a matching domain (.com URL) with your name?
      </h3>

      <div className={styles.buttons}>
        {OPTIONS.map((option, index) => (
          <ButtonOption
            key={option.value}
            option={option}
            isSelected={selectedOption === option.value}
            onChange={setSelectedOption}
            isRecomended={index === 0}
          />
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
