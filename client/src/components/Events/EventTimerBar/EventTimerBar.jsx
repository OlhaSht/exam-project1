
import React, { useEffect, useState } from 'react';
import { Line } from 'rc-progress';
import styles from './EventTimerBar.module.sass';

const EventTimerBar = ({ eventName, eventDate }) => {
  const [percentage, setPercentage] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0 });

  const calculateProgressAndTimeLeft = (eventDate) => {
    const now = new Date();
    const eventTime = new Date(eventDate).getTime();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  
    let percentage;
    let totalSeconds = Math.floor((eventTime - now.getTime()) / 1000);
  
    if (eventTime < now.getTime()) {
      // Событие завершено
      percentage = 100;
      totalSeconds = 0; // Время истекло
    } else {
      // Событие в будущем: прогресс считается от начала дня до времени события
      const totalEventTime = eventTime - startOfDay;
      const elapsedEventTime = now.getTime() - startOfDay;
      percentage = (elapsedEventTime / totalEventTime) * 100;
    }
  
    // Ограничиваем значение процента
    percentage = Math.min(Math.max(percentage, 0), 100);
  
    // Расчёт оставшегося времени
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
  
    return { percentage, hours, minutes };
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { percentage, hours, minutes } = calculateProgressAndTimeLeft(eventDate);

      setPercentage(percentage);
      setTimeLeft({ hours, minutes });

      // Останавливаем таймер, если событие завершено
      if (hours === 0 && minutes === 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    // Очищаем таймер при размонтировании
    return () => clearInterval(intervalId);
  }, [eventDate]);

  // Форматирование оставшегося времени в строку
  const formatTimeLeft = (hours, minutes) => {
    if (hours === 0 && minutes === 0) {
      return 'The event has ended';
    }
    if (hours > 0) {
      return `${hours}ч ${minutes}м`;
    }
    return `${minutes}м`;
  };

  return (
    <div className={styles.timerContainer}>
      <h3 className={styles.eventName}>{eventName}</h3>
      <div className={styles.inputProgressBar}>
        <Line
          percent={percentage}
          strokeWidth={3}
          trailWidth={3}
          strokeColor={timeLeft.hours === 0 && timeLeft.minutes === 0 ? 'red' : '#4CAF50'}
        />
      </div>
      <p className={styles.eventName}>Left: {formatTimeLeft(timeLeft.hours, timeLeft.minutes)}</p>
    </div>
  );
};

export default EventTimerBar;
