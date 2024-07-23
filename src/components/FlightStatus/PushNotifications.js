import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PushNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/api/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <h3>Push Notifications</h3>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.message} - {notification.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PushNotifications;
