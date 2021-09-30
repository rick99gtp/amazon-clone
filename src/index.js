import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

// store.dispatch({
//   type: actions.ADDED_TO_CART,
//   payload: {
//     id: 123,
//     quantity: 1
//   }
// });

// store.dispatch({
//   type: actions.REMOVED_FROM_CART,
//   payload: {
//     id: 123
//   }
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);
