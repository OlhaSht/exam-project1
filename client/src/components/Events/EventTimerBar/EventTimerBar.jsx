import React, { useEffect, useState } from 'react';
import { Line } from 'rc-progress';
import Swal from 'sweetalert2';
import styles from './EventTimerBar.module.sass';

const EventTimerBar = ({ eventName, eventDate, onDelete, onComplete, onTaskRemove }) => {
  const [percentage, setPercentage] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0 });
  const [isCompleted, setIsCompleted] = useState(false); 

  const calculateProgressAndTimeLeft = (eventDate) => {
    const now = new Date();
    const eventTime = new Date(eventDate).getTime();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  
    let percentage;
    let totalSeconds = Math.floor((eventTime - now.getTime()) / 1000);
  
    if (eventTime < now.getTime()) {
      percentage = 100;
      totalSeconds = 0;
    } else {
      const totalEventTime = eventTime - startOfDay;
      const elapsedEventTime = now.getTime() - startOfDay;
      percentage = (elapsedEventTime / totalEventTime) * 100;
    }
  
    percentage = Math.min(Math.max(percentage, 0), 100);
  
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
  
    return { percentage, hours, minutes };
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { percentage, hours, minutes } = calculateProgressAndTimeLeft(eventDate);

      setPercentage(percentage);
      setTimeLeft({ hours, minutes });
      
      if (hours === 0 && minutes === 0 && !isCompleted) {
        setIsCompleted(true);
        onComplete();
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [eventDate, isCompleted, onComplete]);

  const formatTimeLeft = (hours, minutes) => {
    if (hours === 0 && minutes === 0) {
      return 'The event has ended';
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
          strokeWidth={3}
          trailWidth={3}
          strokeColor={timeLeft.hours === 0 && timeLeft.minutes === 0 ? 'red' : '#4CAF50'}
        />
      </div>
      <p className={styles.eventName}>Left: {formatTimeLeft(timeLeft.hours, timeLeft.minutes)}</p>
      <button className={styles.removeButton} 
      onClick={() => {
        if (isCompleted) {
          onDelete(eventDate);
          onTaskRemove();
        } else {
          Swal.fire({
            title: 'The event is not completed yet.',
            text: "Are you sure want to delete it?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4caf50',
            cancelButtonColor: '#ff0000',
            confirmButtonText: 'Yes, delet it',
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.isConfirmed) {
              onDelete(eventDate);
            }
          });
        }
         }}>
        Clear
      </button>
    </div>
  );
};

export default EventTimerBar;
