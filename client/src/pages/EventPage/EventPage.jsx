import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import CONSTANTS from '../../constants';
import Header from '../../components/Header/Header';
import EventForm from '../../components/Events/EventForm/EventForm';
import Footer from '../../components/Footer/Footer';
import EventTimerBar from '../../components/Events/EventTimerBar/EventTimerBar';
import styles from '../../components/Events/EventTimerBar/EventTimerBar.module.sass';

const EventPage = ({role}) => {
  // Инициализируем состояние tasks с проверкой localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [completedEventsCount, setCompletedEventsCount] = useState(0);

  // Функция для добавления новой задачи
  const addTask = (eventName, eventDate, notifyFullDateTime) => {
    const newEvent = {
      id: uuidv4(), eventDate, eventName, notifyDate: notifyFullDateTime
    };
    setTasks((prevTasks) => [
      ...prevTasks, newEvent
    ]);
  };

  const deleteTask = (eventDate) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.eventDate !== eventDate));
  };

  const handleEventComplete = () => {
    setCompletedEventsCount((prev) => prev + 1);
  };
  const handleTaskRemove = () => {
    setCompletedEventsCount(prev => Math.max(0, prev - 1));
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now = new Date();
  
  //     tasks.forEach(task => {
  //       if (!task.notifyDate) return;
  
  //       const notifyTime = new Date(task.notifyDate);
        
  //       if (!isNaN(notifyTime.getTime())) {
  //         const diff = notifyTime.getTime() - now.getTime();
  
  //         if (diff >= 0 && diff < 60000) {
  //           toast.info(`⏰ You have an event: ${task.eventName}`, {
  //             position: "top-right",
  //             autoClose: false,
  //           });
  //         }
  //       } else {
  //         console.warn('⚠️ Invalid notifyDate:', task.notifyDate);
  //       }
  //     });
  //   }, 60000); 
  
  //   return () => clearInterval(interval);
  // }, [tasks]);
  

  // Сохраняем tasks в localStorage при каждом изменении tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  if (role !== CONSTANTS.CUSTOMER) {
    return <p>Only customers can create events</p>
  }

  return (
    <div>
      <Header />
      <div className={styles.eventContainer}>
        <div>
        <EventForm setTasks={addTask} /> 
          <div className={styles.progressBarContainer}>
            <div className={styles.nameContainer}>
              <h2 className={styles.timeListName}>Time Left:
                  {completedEventsCount > 0 && (
                    <span className={styles.closedEvents}>Closed Events
                    <span className={styles.badge}>{completedEventsCount}</span>
                    </span>
                  )}
              </h2>
            </div>

            <ul>
              {tasks
              .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate)) // Сортировка по дате
              .map((task) => (
                <li key={task.id}>
                  <EventTimerBar
                    eventName={task.eventName}
                    eventDate={task.eventDate}
                    onDelete={deleteTask}
                    onComplete={handleEventComplete}
                    onTaskRemove={handleTaskRemove}
                  />
                </li>  
              ))}
            </ul>
          </div>
        </div>
      
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => state.userStore.data;

 export default connect(mapStateToProps)(EventPage);




