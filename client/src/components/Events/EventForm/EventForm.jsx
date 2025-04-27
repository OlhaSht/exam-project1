
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import styles from './EventForm.module.sass';
import * as Yup from 'yup';

const EventForm = ({ setTasks }) => {  

  const validationSchema = Yup.object().shape({
    eventDate: Yup.string()
    .required('Required')
    .test('isFuture', 'Date must be today or in the future', (value) => {
      return value && new Date(value).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0);
    }),
    eventTimeHours: Yup.string().required('Required'),
    eventTimeMinutes: Yup.string().required('Required'),

    eventTime: Yup.string()
    .test('isFutureTime', 'Time must be in the future', function () {
      const { eventDate, eventTimeHours, eventTimeMinutes } = this.parent;
      if (!eventDate) return false;
  
      const eventDateTime = new Date(`${eventDate}T${eventTimeHours}:${eventTimeMinutes}:00`);
      return eventDateTime > new Date(); 
    }),
    
    notifyDate: Yup.string()
      .required('Required')
      .test('isBeforeEvent', 'Notify date must be before event date', function (value) {
        const { eventDate, eventTimeHours, eventTimeMinutes } = this.parent;
        if (!value || !eventDate) return false; 

        const eventDateTime = new Date(`${eventDate}T${eventTimeHours}:${eventTimeMinutes}:00`);
        // const notifyDateTime = new Date(`${value}T23:59:59`); 
        const notifyDateTime = new Date(); 
        return notifyDateTime <= eventDateTime;
      }),
  });

  return (
    <div className={styles.formContainer}>
    <Formik
      initialValues={{
        eventName: '',
        eventDate: '',
        eventTimeHours:'00',
        eventTimeMinutes:'00',
        notifyDate: '',
        notifyTimeHours: '00',
        notifyTimeMinutes: '00',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => { 
        const fullDateTime = `${values.eventDate} ${values.eventTimeHours}:${values.eventTimeMinutes}`;
        const notifyFullDateTime = `${values.notifyDate}T${values.notifyTimeHours.padStart(2, '0')}:${values.notifyTimeMinutes.padStart(2, '0')}`;
        setTasks(values.eventName, fullDateTime, notifyFullDateTime);
        resetForm(); 
      }}
    >
      {({ isSubmitting, resetForm }) => (
        <Form noValidate>
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
              min={new Date().toISOString().split('T')[0]}
            />
            <ErrorMessage name="eventDate" component="div" className={styles.errorMessege} /> 
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
              min={new Date().toISOString().split('T')[0]}
            />
            <ErrorMessage name="notifyDate" component="div" className={styles.errorMessege} />  
          </div>

          <div className={styles.inputForm}>
            <label htmlFor="eventTimeHours">Time</label>
              <div className={styles.timeSelect}>
              <Field as="select" name="notifyTimeHours">
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={String(i).padStart(2, '0')}>
                    {String(i).padStart(2, '0')}
                  </option>
                ))}
              </Field>
              <span>:</span>
              <Field as="select" name="notifyTimeMinutes">
                {Array.from({ length: 60 }, (_, i) => (
                  <option key={i} value={String(i).padStart(2, '0')}>
                    {String(i).padStart(2, '0')}
                  </option>
                ))}
              </Field>
              </div>
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
  


  

