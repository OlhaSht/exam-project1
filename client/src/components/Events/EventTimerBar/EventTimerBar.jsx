// import React, { useEffect, useState } from 'react';
// import { Line } from 'rc-progress';
// import styles from './EventTimerBar.module.sass';

// const EventTimerBar = ({ eventName, eventDate }) => {
//   const totalTime = new Date(eventDate).getTime() - Date.now();
//   const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(eventDate));
//   const [percentage, setPercentage] = useState(0);

//   // const totalTime = new Date(eventDate).getTime() - new Date().getTime();

//   // Функция для вычисления оставшегося времени в часах и минутах
//   function calculateTimeLeft(eventDate) {
//     const now = new Date();
//     const eventTime = new Date(eventDate).getTime();
//     const timeLeftInMs = Math.max(0, eventTime - now.getTime());

//     const totalSeconds = Math.floor(timeLeftInMs / 1000);
//     const hours = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);

//     return { hours, minutes, timeLeftInMs };
//   }

//   // Обновляем таймер и процентный прогресс
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const newTimeLeft = calculateTimeLeft(eventDate);
//       setTimeLeft(newTimeLeft);
    

//         // Вычисляем прошедшее время
//       const elapsedTime = totalTime - newTimeLeft.timeLeftInMs;
//       const newPercentage = (elapsedTime / totalTime) * 100;

//       // Обновляем процент прогресса
//       setPercentage(Math.min(newPercentage, 100));

//     // Проверяем, если время истекло
//     if (newTimeLeft.timeLeftInMs <= 0) {
//         clearInterval(intervalId);
//       }
//     }, 1000);

//     // Очищаем таймер при размонтировании
//     return () => clearInterval(intervalId);
//   }, [eventDate, totalTime]);

//   // Форматирование оставшегося времени в строку
//   const formatTimeLeft = (hours, minutes) => {
//     if (hours === 0 && minutes === 0) {
//       return 'Событие завершено';
//     }
//     if (hours > 0) {
//       return `${hours}h ${minutes}m`;
//     }
//     return `${minutes}m`;
//   };

//   return (
//     <div className={styles.timerContainer}>
//       <h3 className={styles.eventName}>{eventName}</h3>
//       <div className={styles.inputProgressBar}>
//         <Line
//           percent={percentage}
//           strokeWidth={3}
//           trailWidth={3}
//           strokeColor={timeLeft.hours === 0 && timeLeft.minutes === 0 ? 'red' : '#4CAF50'}
//         />
//       </div>
//       <p className={styles.eventName}>Left: {formatTimeLeft(timeLeft.hours, timeLeft.minutes)}</p>
//     </div>
//   );
// };

// export default EventTimerBar;


import React, { useEffect, useState } from 'react';
import { Line } from 'rc-progress';
import styles from './EventTimerBar.module.sass';

const EventTimerBar = ({ eventName, eventDate }) => {
  const [percentage, setPercentage] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0 });

  // // Функция для вычисления процента и оставшегося времени
  // const calculateProgressAndTimeLeft = (eventDate) => {
  //   const now = new Date();
  //   const eventTime = new Date(eventDate).getTime();
  //   const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  
  //   let percentage;
  //   if (eventTime >= now.getTime()) {
  //     // Событие в будущем: прогресс считается от начала дня до времени события
  //     const totalEventTime = eventTime - startOfDay;
  //     const elapsedEventTime = now.getTime() - startOfDay;
  //     percentage = (elapsedEventTime / totalEventTime) * 100;
  //   } else {
  //     // Событие завершено: прогресс равен 100
  //     percentage = 100;
  //   }
  
  //   // Ограничиваем значение процента
  //   percentage = Math.min(Math.max(percentage, 0), 100);
  
  //   // Расчёт оставшегося времени
  //   const totalSeconds = Math.floor((eventTime - now.getTime()) / 1000);
  //   const hours = Math.floor(totalSeconds / 3600);
  //   const minutes = Math.floor((totalSeconds % 3600) / 60);
  
  //   return { percentage, hours, minutes };
  // };

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
      return 'Событие завершено';
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
      <p className={styles.eventName}>Осталось: {formatTimeLeft(timeLeft.hours, timeLeft.minutes)}</p>
    </div>
  );
};

export default EventTimerBar;
