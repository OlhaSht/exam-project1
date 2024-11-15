// src/components/Events/EventForm/EventForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import styles from './EventForm.module.sass'

const EventForm = ({ setTasks }) => {  // Принимаем setTasks как проп
  return (
    <div className={styles.formContainer}>
    <Formik
      initialValues={{
        eventName: '',
        eventDate: '',
      }}
      onSubmit={(values, { resetForm }) => {
        setTasks(values.eventName, values.eventDate);  // Вызываем setTasks с нужными аргументами
        resetForm(); 
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={styles.inputContainer}>
          <div className={styles.inputForm}>
            <label htmlFor="eventName">Event</label>
            <Field 
              id="eventName" 
              name="eventName" 
              placeholder="Enter event name" 
              required 
            />
          </div>

          <div className={styles.inputForm}>
            <label htmlFor="eventDate">Date</label>
            <Field 
              id="eventDate" 
              name="eventDate" 
              type="date" 
              required 
            />
          </div>

          <div className={styles.inputForm}>
            <label htmlFor="eventDate">Date</label>
            <Field 
              id="eventDate" 
              name="eventDate" 
              type="date" 
              required 
            />
          </div>

          <button type="submit" className={styles.buttonForm} disabled={isSubmitting}>
            Done
          </button>
          </div>
        </Form>
      )}
    </Formik>
    </div>
  );
};

const mapDispatchToProps = {
  
   };
  
  export default connect(null, mapDispatchToProps)(EventForm);
  


// import React from "react";
// import { Form, Formik, Field } from 'formik';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

// // Предположим, что у нас есть action для отправки данных
// // import { submitEvent } from '../actions';

// const EventForm = (setTasks, { data }) => {
//   return (
//     <Formik
//       initialValues={{
//         eventName: '',
//         eventDate: '',
//       }}
//       onSubmit={(values, { resetForm }) => {
//         setTasks(values.eventName, values.eventDate )
//         resetForm(); 
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <div>
//             <label htmlFor="eventName">Event</label>
//             <Field 
//               id="eventName" 
//               name="eventName" 
//               placeholder="enter event name" 
//               required 
//             />
//           </div>

//           <div>
//             <label htmlFor="eventDate">Date</label>
//             <Field 
//               id="eventDate" 
//               name="eventDate" 
//               type="date" 
//               required 
//             />
//           </div>

//           <button type="submit" disabled={isSubmitting}>
//             Done
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// // Подключаем компонент к Redux, чтобы передать action submitEvent в пропсы
// const mapDispatchToProps = {
  
// };

// export default connect(null, mapDispatchToProps)(EventForm);
