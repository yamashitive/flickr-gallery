import {
  // 名前が被ってしまうので別名でimportする
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import tasksReducer from '../reducers/tasks';

//historyは[src/index.js]から渡すようにする
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      //tasksReducerをtasksというkeyに割り当てる
      tasks: tasksReducer,
      // react-router-reduxのReducer
      router: routerReducer,
    }),
    applyMiddleware(
      // react-router-reduxのReduxMiddleware Reduxのaction経由でルーティングを制御
      routerMiddleware(history)
    )
  );
}