import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PopUpNotificationProvider } from './components/services/notification';
import { Provider } from 'react-redux';
import store from './components/services/reduxStore/store/store';
// import { PopUpNotificationProvider } from './components/notification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <PopUpNotificationProvider>
      <Provider store={store}>
        <App />    
      </Provider>
    </PopUpNotificationProvider>
  </React.Fragment>
);
