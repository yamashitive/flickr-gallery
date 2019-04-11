import React from 'react';
import {render} from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import tasksReducer from './reducers/tasks'
// import { ReloadImages, AddImages, HandleChange, ChangePageIndex, App } from './containers/App'
import App from './containers/App'
import './index.css';

import * as serviceWorker from './serviceWorker';



// Store ----------------------------------------------------------------------------------------
const store = createStore(tasksReducer);

// Rendering ----------------------------------------------------------------------------------------
// const renderApp = (store) => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('root')
//   );
// }

// store.subscribe(() => renderApp(store));
// renderApp(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();