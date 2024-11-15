
import React, { useEffect, useState } from 'react';
import { Line } from 'rc-progress';
import styles from './EventTimerBar.module.sass';

const EventTimerBar = ({ eventName, eventDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(eventDate));
  const [percentage, setPercentage] = useState(0);

  // Функция для вычисления оставшегося времени в миллисекундах
  function calculateTimeLeft(eventDate) {
    const now = new Date();
    const eventTime = new Date(eventDate).getTime();
    return Math.max(0, eventTime - now.getTime());
  }

  // Обновляем таймер и процентный прогресс
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(eventDate);
      setTimeLeft(newTimeLeft);

      // Вычисляем прогресс (процент оставшегося времени)
      const totalTime = new Date(eventDate).getTime() - new Date().getTime();
      setPercentage(((totalTime - newTimeLeft) / totalTime) * 100);

      // Проверяем, если время истекло
      if (newTimeLeft <= 0) {
        clearInterval(intervalId);
        onComplete(); // Уведомляем, что событие завершилось
      }
    }, 1000);

    // Очищаем таймер при размонтировании
    return () => clearInterval(intervalId);
  }, [eventDate, onComplete]);

  return (
    <div className={styles.timerContainer}>
      <h3>{eventName}</h3>
      <div className={styles.progressBar}>
        <Line percent={percentage} strokeWidth={4} strokeColor={timeLeft <= 0 ? "red" : "#4CAF50"} />
      </div>
      <p>Осталось: {Math.floor(timeLeft / 1000)} сек</p>
    </div>
  );
};

export default EventTimerBar;
