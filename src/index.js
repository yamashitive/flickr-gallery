import React from 'react';
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// InitialState ----------------------------------------------------------------------------------------
const initialState = {
  pictures: [],
  textInput: 'shibuya',
  pageIndex: 1,
}

// Reducer ----------------------------------------------------------------------------------------
function tasksReducer(state=initialState, action) {
  switch (action.type) {
    case 'INITIALIZE_PICTURE':
      return {
        ...state,
        pictures:  action.payload.pictureTag
      };

    case 'ADD_PICTURE':
      return {
        ...state,
        pictures:  state.pictures.concat([action.payload.pictureTag])
      };

    case 'INPUT_TEXT':
      return {
        ...state,
        textInput: action.payload.text
      };

    case 'CHANGE_INDEX':
      return {
        ...state,
        pageIndex: action.payload.indexNum
      };

    default:
      return state;
  }
}

// Store ----------------------------------------------------------------------------------------
const store = createStore(tasksReducer);

// ActionCreator ----------------------------------------------------------------------------------------
const initializePicture = (pictureTag) => ({
  type: 'INITIALIZE_PICTURE',
  payload: {
    pictureTag
  }
});

const addPicture = (pictureTag) => ({
  type: 'ADD_PICTURE',
  payload: {
    pictureTag
  }
});

const inputText = (text) => ({
  type: 'INPUT_TEXT',
  payload: {
    text
  }
});

const changeIndex = (indexNum) => ({
  type: 'CHANGE_INDEX',
  payload: {
    indexNum
  }
});

// Conpornent ----------------------------------------------------------------------------------------
const ReloadImages = async() => {
  await ChangePageIndex(1);  //async定義内では、awaitの処理が待たれる

  const{ pictures, textInput, pageIndex } = store.getState();

  //fetch()の結果はPromiseで返され、resolve関数には引数としてResponseオブジェクトが渡される。
  fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+'80fc790f054fc08c6370aba43284e925'+'&tags=' + textInput + '&per_page=3&page=' + pageIndex + '&format=json&nojsoncallback=1')
  .then(function(response){
    return response.json();
  })
  .then(function(j){
    let picArray = j.photos.photo.map((pic) => {
      var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'_n.jpg';
      return(
        <div><img alt="" src={srcPath}></img></div>
      )
    })

    store.dispatch(initializePicture(picArray));

  }.bind(this))
}

const AddImages = async() => {
  await ChangePageIndex();  //async定義内では、awaitの処理が待たれる

  const{ textInput, pageIndex } = store.getState();

  fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+'80fc790f054fc08c6370aba43284e925'+'&tags=' + textInput + '&per_page=3&page=' + pageIndex + '&format=json&nojsoncallback=1')
  .then(function(response){
    return response.json();
  })
  .then(function(j){
    let addPicArray = j.photos.photo.map((pic) => {
      var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'_n.jpg';
      return(<div><img alt="" src={srcPath}></img></div>)
    })

    store.dispatch(addPicture(addPicArray));
  }.bind(this))
}

//input変更時、stateの検索キーワードを変更
const HandleChange = (e) => {
  if(e.target.value === ""){
  }else{
    // this.setState({textInput: e.target.value});
    store.dispatch(inputText(e.target.value));
  }
}

const ChangePageIndex = (p) => {
  const{ pageIndex } = store.getState();
  // console.log(p);

  if(!p){
    p = pageIndex;
  }

  var currentPageIndex = p;
  // console.log(currentPageIndex);
  currentPageIndex++;

  store.dispatch(changeIndex(currentPageIndex));
}

const App = () => {

  const{ pictures} = store.getState();

  return (
    <div className="App">
      <header>
        <h1 className="App-title">Flickr Gallery</h1>
      </header>

      <p className="searchBox">
        <input className="textInput" 
          placeholder= "shibuya"
          onChange = {HandleChange}
        ></input>

        <button
          onClick = {ReloadImages}
        >検索</button>
      </p>

      <section className="picArea">
        {pictures}
      </section>

      <p className="moreButton">
        <button
          onClick = {AddImages}
        >画像をさらに読み込む</button>
      </p>
    </div>
  );
}

// Rendering ----------------------------------------------------------------------------------------
function renderApp(store) {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();