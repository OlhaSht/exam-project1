import React, { useEffect, useState } from 'react';
import { Line } from 'rc-progress';
import styles from './EventTimerBar.module.sass';

const EventTimerBar = ({ eventName, eventDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(eventDate));
  const [percentage, setPercentage] = useState(0);

  // Функция для вычисления оставшегося времени в часах и минутах
  function calculateTimeLeft(eventDate) {
    const now = new Date();
    const eventTime = new Date(eventDate).getTime();
    const timeLeftInMs = Math.max(0, eventTime - now.getTime());

    const totalSeconds = Math.floor(timeLeftInMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    return { hours, minutes };
  }

  // Обновляем таймер и процентный прогресс
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(eventDate);
      setTimeLeft(newTimeLeft);

      // Вычисляем прогресс (процент оставшегося времени)
      const totalTime = new Date(eventDate).getTime() - new Date().getTime();
      const elapsedTime =
        totalTime -
        (newTimeLeft.hours * 3600 * 1000 + newTimeLeft.minutes * 60 * 1000);
      setPercentage(((elapsedTime / totalTime) * 100));

      // Проверяем, если время истекло
      if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0) {
        clearInterval(intervalId);
        onComplete(); // Уведомляем, что событие завершилось
      }
    }, 1000);

    // Очищаем таймер при размонтировании
    return () => clearInterval(intervalId);
  }, [eventDate, onComplete]);

  // Форматирование оставшегося времени в строку
  const formatTimeLeft = (hours, minutes) => {
    if (hours === 0 && minutes === 0) {
      return 'Событие завершено';
    }
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  return (
    <div className={styles.timerContainer}>
      <h3 className={styles.eventName}>{eventName}</h3>
      <div className={styles.inputProgressBar}>
        <Line
          percent={percentage}
          strokeWidth={4}
          strokeColor={timeLeft.hours === 0 && timeLeft.minutes === 0 ? 'red' : '#4CAF50'}
        />
      </div>
      <p>Left: {formatTimeLeft(timeLeft.hours, timeLeft.minutes)}</p>
    </div>
  );
};

export default EventTimerBar;
