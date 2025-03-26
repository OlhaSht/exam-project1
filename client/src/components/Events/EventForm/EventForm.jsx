
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import styles from './EventForm.module.sass';
import * as Yup from 'yup';

const EventForm = ({ setTasks }) => {  

  const validationSchema = Yup.object().shape({
    eventDate: Yup.string().required('Required'),
    eventTimeHours: Yup.string().required('Required'),
    eventTimeMinutes: Yup.string().required('Required'),
    notifyDate: Yup.string()
      .required('Required')
      .test('isBeforeEvent', 'Notify date must be before or same as event date', function (value) {
        const { eventDate, eventTimeHours, eventTimeMinutes } = this.parent;
        if (!value || !eventDate) return false; 

        const eventDateTime = new Date(`${eventDate}T${eventTimeHours}:${eventTimeMinutes}:00`);
        const notifyDateTime = new Date(`${value}T23:59:59`); 

        return notifyDateTime <= eventDateTime;
      }),
  });

  return (
    <div className={styles.formContainer}>
    <Formik
      initialValues={{
        eventName: '',
        eventDate: '',
        eventTimeHours:'12',
        eventTimeMinutes:'00',
        notifyDate: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        // setTasks(values.eventName, values.eventDate);  
        const fullDateTime = `${values.eventDate} ${values.eventTimeHours}:${values.eventTimeMinutes}`;
        setTasks(values.eventName, fullDateTime);
        resetForm(); 
      }}
    >
      {({ isSubmitting, resetForm }) => (
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
                <label htmlFor="eventTimeHours">Time</label>
                <div className={styles.timeSelect}>
                  <Field as="select" id="eventTimeHours" name="eventTimeHours">
                    {Array.from({ length: 24 }, (_, i) => (
                      <option key={i} value={String(i).padStart(2, '0')}>
                        {String(i).padStart(2, '0')}
                      </option>
                    ))}
                  </Field>
                  <span>:</span>
                  <Field as="select" id="eventTimeMinutes" name="eventTimeMinutes">
                    {Array.from({ length: 60 }, (_, i) => (
                      <option key={i} value={String(i).padStart(2, '0')}>
                        {String(i).padStart(2, '0')}
                      </option>
                    ))}
                  </Field>
                </div>
          </div>

          <div className={styles.inputForm}>
            <label htmlFor="notifyDate">Notify by</label>
            <Field 
              id="notifyDate" 
              name="notifyDate" 
              type="date" 
              required 
            />
            <ErrorMessage name="notifyDate" component="div" className={styles.error} />
          </div>

          <button type="submit" className={styles.buttonForm} disabled={isSubmitting}>
            Done
          </button>

          <button type="button" className={styles.buttonForm} onClick={resetForm}>
            Reset
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
  


  

