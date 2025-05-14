import { useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import CONSTANTS from '../../constants';

const NotificationEvent = ({role}) => {
  useEffect(() => {

    if (role!== CONSTANTS.CUSTOMER) return;

    const interval = setInterval(() => {
      const now = new Date();
      const nowString = now.toISOString().slice(0, 16);

      const tasksRaw = localStorage.getItem('tasks');
      let tasks = [];

      try {
        tasks = tasksRaw ? JSON.parse(tasksRaw) : [];
      } catch (err) {
        console.warn("⚠️ Ошибка чтения tasks из localStorage", err);
        return;
      }

      tasks.forEach((task) => {
        if (!task?.notifyDate || !task?.eventName) return;

        const notifyTime = new Date(task.notifyDate);

        if (isNaN(notifyTime.getTime())) {
          console.warn("⚠️ Invalid notifyDate:", task.notifyDate);
          return;
        }

        const notifyString = notifyTime.toISOString().slice(0, 16);

        if (notifyString === nowString) {
            const audio = new Audio(`${CONSTANTS.NOTIFICATION_AUDIO}Marimba-notification-tone.mp3`);
            console.log(audio);
            audio.play();

          toast.info(`⏰ You have an event: ${task.eventName}`, {
            position: "top-right",
            autoClose: false, 
            closeOnClick: true,
            draggable: true,
          });
        }
      });
    }, 60000); 

    return () => clearInterval(interval);
  }, []);

  return null;
};

const mapDispatchToProps = (state) =>({
  role: state.userState?.data?.role,
});

export default connect(mapDispatchToProps)(NotificationEvent);

// export default NotificationEvent;



