import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import EventForm from '../../components/Events/EventForm/EventForm';
import Footer from '../../components/Footer/Footer';
import EventTimerBar from '../../components/Events/EventTimerBar/EventTimerBar';
import styles from '../../components/Events/EventTimerBar/EventTimerBar.module.sass';

const EventPage = () => {
  // Инициализируем состояние tasks с проверкой localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Функция для добавления новой задачи
  const addTask = (eventName, eventDate) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, eventName, eventDate }
    ]);
  };

  const deleteTask = (eventDate) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.eventDate !== eventDate));
  };

  // Сохраняем tasks в localStorage при каждом изменении tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Header />
      <div className={styles.eventContainer}>
        <div>
        <EventForm setTasks={addTask} /> 
      <div className={styles.progressBarContainer}>
        <h2 className={styles.timeListName}>Time Left:</h2>
        <ul>
          {tasks
          .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate)) // Сортировка по дате
          .map((task) => (
            <li key={task.id}>
              <EventTimerBar
                eventName={task.eventName}
                eventDate={task.eventDate}
                onDelete={deleteTask}
                // onComplete={() => handleComplete(task.id)}
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

// Функция для подключения Redux-состояния
const mapStateToProps = (state) => state.userStore.data;

 export default connect(mapStateToProps)(EventPage);




