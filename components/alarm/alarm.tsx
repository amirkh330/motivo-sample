'use client'
import { useEffect, useState } from 'react';

const Alarm = () => {
  const [time, setTime] = useState<string>('');
  const [isAlarmSet, setIsAlarmSet] = useState<boolean>(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      });
    }
  }, []);

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        alert('You need to allow notifications to use the alarm feature.');
      }
    }
  };

  const setAlarm = () => {
    const alarmTime = new Date(time);
    const currentTime = new Date();
    const delay = alarmTime.getTime() - currentTime.getTime();

    if (delay > 0) {
      setIsAlarmSet(true);

      setTimeout(() => {
        if (Notification.permission === 'granted') {
          new Notification('Alarm', {
            body: 'It\'s time!',
          });
        }
        setIsAlarmSet(false); // Reset the alarm state after it goes off
      }, delay);
    } else {
      alert('Please select a future time for the alarm.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>PWA Alarm Example</h1>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="alarmTime">Set Alarm Time:</label>
        <input
          id="alarmTime"
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </div>

      <button onClick={requestNotificationPermission}>Enable Notifications</button>
      <button onClick={setAlarm} style={{ marginLeft: '10px' }}>
        Set Alarm
      </button>

      {isAlarmSet && <p>Alarm is set for {new Date(time).toLocaleString()}</p>}
    </div>
  );
};

export default Alarm;
