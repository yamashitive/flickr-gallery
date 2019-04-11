import React from 'react';
// import { initializePicture, addPicture, inputText, changeIndex } from '../actions/tasks.js'


// Conpornent ----------------------------------------------------------------------------------------
export default function App({pictures, textInput, pageIndex, initializePicture, addPicture, inputText, changeIndex}) {

  const ReloadImages = async() => {
    await ChangePageIndex(1);  //async定義内では、awaitの処理が待たれる

    //fetch()の結果はPromiseで返され、resolve関数には引数としてResponseオブジェクトが渡される。
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+'80fc790f054fc08c6370aba43284e925'+'&tags=' + textInput + '&per_page=3&page=1&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      let picArray = j.photos.photo.map((pic) => {
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'_n.jpg';
        var picID = pic.id;
        return(<div key={picID}><img alt="" src={srcPath}></img></div>)
      })

      initializePicture(picArray);
    }.bind(this))
  }

  const AddImages = async() => {
    await ChangePageIndex();  //async定義内では、awaitの処理が待たれる
    pageIndex++;

    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+'80fc790f054fc08c6370aba43284e925'+'&tags=' + textInput + '&per_page=3&page=' + pageIndex + '&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      let addPicArray = j.photos.photo.map((pic) => {
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'_n.jpg';
        var picID = pic.id;
        return(<div key={picID}><img alt="" src={srcPath}></img></div>)
      })

      addPicture(addPicArray);
    }.bind(this))
  }

  //input変更時、stateの検索キーワードを変更
  const HandleChange = (e) => {
    if(e.target.value === ""){
    }else{
      inputText(e.target.value);
    }
  }

  const ChangePageIndex = (p) => {
    // console.log(p);

    if(!p){
      p = pageIndex;
      p++;
    }

    var currentPageIndex = p;
    console.log(currentPageIndex);

    changeIndex(currentPageIndex);
  }

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