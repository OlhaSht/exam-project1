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

  // Сохраняем tasks в localStorage при каждом изменении tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Удаляем завершенные задачи и обновляем бейджик
  const handleComplete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Header />
      <div className={styles.eventContainer}>
      <EventForm setTasks={addTask} /> {/* Передаем функцию addTask в EventForm */}
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
                onComplete={() => handleComplete(task.id)}
              />
            </li>  
          ))}
        </ul>
      </div>
      </div>
      <Footer />
    </div>
  );
};

// Функция для подключения Redux-состояния
const mapStateToProps = (state) => state.userStore.data;

 export default connect(mapStateToProps)(EventPage);




// src/pages/EventPage/EventPage.js
// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import Header from '../../components/Header/Header';
// import EventForm from '../../components/Events/EventForm/EventForm';
// import Footer from '../../components/Footer/Footer';

// const EventPage = () => {
//   const [tasks, setTasks] = useState([]);

//   // Функция для добавления новой задачи
//   const addTask = (eventName, eventDate) => {
//     setTasks((prevTasks) => [
//       ...prevTasks,
//       { id: prevTasks.length + 1, eventName, eventDate }
//     ]);
//   };

//   return (
//     <div>
//       <Header />
//       <EventForm setTasks={addTask} /> {/* Передаем функцию addTask в EventForm */}
//       <div>
//         <h2>Список событий:</h2>
//         <ul>
//           {tasks.map((task) => (
//             <li key={task.id}>
//               {task.eventName} - {task.eventDate}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// // Функция для подключения Redux-состояния
// const mapStateToProps = (state) => state.userStore.data;

// export default connect(mapStateToProps)(EventPage);



// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import Header from '../../components/Header/Header';
// import EventForm from '../../components/Events/EventForm/EventForm';
// import Footer from '../../components/Footer/Footer';

// const EventPage = () => {
//   const [tasks, setTasks] = useState([]);

//   // Функция для добавления новой задачи
//   const addTask = (eventName, eventDate) => {
//     setTasks((prevTasks) => [
//       ...prevTasks,
//       { id: prevTasks.length + 1, eventName, eventDate }
//     ]);
//   };

//   return (
//     <div>
//       <Header />
//       <EventForm setTasks={addTask} /> {/* Передаем функцию добавления задачи в EventForm */}
//       <div>
//         <h2>Список событий:</h2>
//         <ul>
//           {tasks.map((task) => (
//             <li key={task.id}>
//               {task.eventName} - {task.eventDate}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// // Функция для подключения Redux-состояния
// const mapStateToProps = (state) => state.userStore.data;

// export default connect(mapStateToProps)(EventPage);




// // import React from 'react';
// // import { connect } from 'react-redux';
// // import Header from '../../components/Header/Header';
// // import EventForm from '../../components/Events/EventForm/EventForm';
// // import Footer from '../../components/Footer/Footer';
// // import { useState } from 'react';



// // const EventPage = () => {
// // const [tasks, setTasks] = useState ([])
// //     return (
// //         <div>
// //             <Header />
// //             <EventForm setTasks={(eventName, eventDate) => setTasks({}) }/> 
// //             <Footer />
// //         </div>
// //     );
// // };

// // const mapStateToProps = state => state.userStore.data;

// // export default connect(mapStateToProps)(EventPage);