import React from 'react';
import { Link } from 'react-router-dom';

// Conpornent ----------------------------------------------------------------------------------------
export default function App({pictures, textInput, pageIndex, placeholderText, initializePicture, addPicture, initializePictureSRC, addPictureSRC, inputText, changeIndex, changePlaceholder}) {
  //async定義内では、awaitの処理が待たれる
  const ReloadImages = async() => {
    // await Promise.all([ ChangePageIndex(1), initializePictureSRC() ]);
    await ChangePageIndex(1);

    //fetch()の結果はPromiseで返され、resolve関数には引数としてResponseオブジェクトが渡される。
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+'80fc790f054fc08c6370aba43284e925'+'&tags=' + textInput + '&per_page=10&page=1&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){


      let picArray = j.photos.photo.map((pic) => {
        const srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'_n.jpg';
        const picID = pic.id;
        const picURL = "/picture/" + pic.id;

        return(
          <div key={picID}>
            <Link to={picURL}>
              <img alt="" src={srcPath}></img>
            </Link>
          </div>
        )
      })

      let srcObj = {};
      let addObj = {};
      j.photos.photo.forEach((pic) => {
        const srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        const picID = pic.id;
        const picTitle = pic.title;

        const picInfo = {'src':srcPath, 'title':picTitle};
        addObj[picID] = picInfo;
        Object.assign(srcObj, addObj);
      });

      initializePicture(picArray);
      initializePictureSRC(srcObj)

      // console.log(srcObj);
    }.bind(this))
  }

  const AddImages = async() => {
    await ChangePageIndex();  //async定義内では、awaitの処理が待たれる
    pageIndex++;

    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+'80fc790f054fc08c6370aba43284e925'+'&tags=' + textInput + '&per_page=10&page=' + pageIndex + '&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      let addPicArray = j.photos.photo.map((pic) => {
        const srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'_n.jpg';
        const picID = pic.id;
        const picURL = "/picture/" + pic.id;

        return(
          <div key={picID}>
            <Link to={picURL}>
              <img alt="" src={srcPath} ></img>
            </Link>
          </div>
        )
      })

      let srcObj = {};
      let addObj = {};
      j.photos.photo.forEach((pic) => {
        const srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        const picID = pic.id;
        const picTitle = pic.title;

        const picInfo = {'src':srcPath, 'title':picTitle};
        addObj[picID] = picInfo;
        Object.assign(srcObj, addObj);
      });

      addPicture(addPicArray);
      addPictureSRC(srcObj);
    }.bind(this))
  }

  //input変更時、stateの検索キーワードを変更
  const HandleChange = (e) => {
    if(e.target.value === ""){
    }else{
      inputText(e.target.value);
    }

    if(placeholderText) {
      changePlaceholder();
    }
  }

  const ChangePageIndex = (p) => {
    // console.log(p);

    if(!p){
      p = pageIndex;
      p++;
    }

    var currentPageIndex = p;
    // console.log(currentPageIndex);

    changeIndex(currentPageIndex);
  }

  // const addPictureSRC = (s) => {
  //   addPictureSRC(s);
  // } 

  return (
    <div className="App">
      <header>
        <h1 className="App-title">Flickr Gallery</h1>
      </header>

      <p className="searchBox">
        <input className="textInput" 
          placeholder= {placeholderText}
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