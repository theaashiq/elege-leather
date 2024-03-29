import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PopUpNotificationProvider } from './components/services/notification';
// import { PopUpNotificationProvider } from './components/notification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PopUpNotificationProvider>
      <App />    
    </PopUpNotificationProvider>
  </React.StrictMode>
);
