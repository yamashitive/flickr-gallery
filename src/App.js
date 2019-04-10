import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      pictures: [],
      textInput: 'shibuya',
      pageIndex: 1,
    };
  }

//
  componentDidMount(){
    this.ReloadImages();
  }

//
  ReloadImages = () => {
    //fetch()の結果はPromiseで返され、resolve関数には引数としてResponseオブジェクトが渡される。
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+'80fc790f054fc08c6370aba43284e925'+'&tags=' + this.state.textInput + '&per_page=4&page=' + this.state.pageIndex + '&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      let picArray = j.photos.photo.map((pic) => {
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          <div><img alt="" src={srcPath}></img></div>
        )
      })
      this.setState({pictures: picArray});
    }.bind(this))
  }

  //input変更時、stateの検索キーワードを変更
  HandleChange = (e) => {
    if(e.target.value === ""){
    }else{
      this.setState({textInput: e.target.value});
    }
  }

  //コールバック関数を指定した秒数遅延させる
  Delay = (function(){
    let timer = 0;
    return function(callback, ms){
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  ChangePageIndex = (p = this.state.pageIndex) => {
    var currentPageIndex = p;
    currentPageIndex++;
    this.setState({pageIndex: currentPageIndex});

  }

  HandleMore = async() => {  //async定義内では、awaitの処理が待たれる
    await this.ChangePageIndex();

    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+'80fc790f054fc08c6370aba43284e925'+'&tags=' + this.state.textInput + '&per_page=4&page=' + this.state.pageIndex + '&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      let addPicArray = j.photos.photo.map((pic) => {
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(<div><img alt="" src={srcPath}></img></div>)
      })

      this.setState({
        pictures: this.state.pictures.concat(addPicArray)
      });
    }.bind(this))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Flickr Gallery</h1>
        </header>

        <p className="searchBox">
          <input className="textInput" 
            placeholder= "shibuya"
            onChange = {this.HandleChange}
            onKeyUp = {() => this.Delay(function(){
              this.ReloadImages();
              this.ChangePageIndex(0);
              }.bind(this), 1000)}
          ></input>
        </p>

        <section className="picArea">
          {this.state.pictures}
        </section>

        <p className="moreButton">
          <button
            onClick = {this.HandleMore}
          >画像をさらに読み込む</button>
        </p>
      </div>
    );
  }
}

export default App;