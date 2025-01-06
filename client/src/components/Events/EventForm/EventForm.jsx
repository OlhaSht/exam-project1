
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import styles from './EventForm.module.sass'

const EventForm = ({ setTasks }) => {  
  return (
    <div className={styles.formContainer}>
    <Formik
      initialValues={{
        eventName: '',
        eventDate: '',
      }}
      onSubmit={(values, { resetForm }) => {
        setTasks(values.eventName, values.eventDate);  
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
            <label htmlFor="eventDate">Notify by</label>
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
  


