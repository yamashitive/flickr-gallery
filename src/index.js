import React from 'react';
import {render} from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import flickrGalleryReducer from './reducers/tasks'
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { ReloadImages, AddImages, HandleChange, ChangePageIndex, App } from './containers/App'
import App from './containers/App'
import PictureDetail from './containers/PictureDetail'
import './index.css';

import * as serviceWorker from './serviceWorker';

// middleware ----------------------------------------------------------------------------------------
const middlewares = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
// const middlewares = [thunk];

// Store ----------------------------------------------------------------------------------------
const store = createStoreWithMiddleware(
  flickrGalleryReducer
  ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const store = createStore(
//   flickrGalleryReducer,
//   applyMiddleware(...middlewares)
//   // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// Rendering ----------------------------------------------------------------------------------------
render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route 
        path="/picture/:id"
        component={PictureDetail}
      />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();