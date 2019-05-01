import React from 'react';

// Conpornent ----------------------------------------------------------------------------------------
const App = ({
  pictures, textInput, pageIndex, placeholderText, 
  initializePicture, addPicture, initializePictureSRC, addPictureSRC, inputText, changeIndex, changePlaceholder, reloadImages, addImages
}) => {

  //検索キーワードを変更
  const HandleChange = (e) => {
    if(e.target.value === ""){
    }else{
      inputText(e.target.value);
    }
  }

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
          onClick = {() => reloadImages(textInput)}
        >検索</button>
      </p>

      <section className="picArea">
        {pictures}
      </section>

      {(
        () => {
          if (pictures.length > 0) {
            return (
              <p className="moreButton">
                <button
                  onClick = {() => addImages(textInput, pageIndex)}
                >画像をさらに読み込む</button>
              </p>
            );
          } else {
            return (
              <p>検索したいキーワードを入力して、［検索］ボタンを押してください。</p>
            );
          }
        }
      )()}
    </div>
  );
}
export default App;