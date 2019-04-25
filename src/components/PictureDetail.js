import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

// Conpornent ----------------------------------------------------------------------------------------
const PictureDetail = (props) => {

  const picID = props.match.params.id;
  const picInfo = props.pictureSRC[picID];
  let picSRC;
  let picTitle;
  let divHash;

  if(picInfo){
    picSRC = picInfo['src'];
    picTitle = picInfo['title'];
    divHash = "/#id-" + picID;
  }

  return (
    <div className="App PictureDetail">
      <header>
        <h1 className="App-title">Flickr Gallery</h1>
      </header>

      <div>
        {(
          () => {
            if (picInfo) {
              return (
                <div>
                  <img src={picSRC} alt={picTitle}/>
                  <p>{picTitle}</p>
                </div>
              );
            } else {
              return (
                <p>画像が取得できていません。</p>
              );
            }
          }
        )()}
      </div>

      <p className="moreButton">
        {(
          () => {
            if (picInfo) {
              return (
                // <Link to={divHash} ><button>戻る</button></Link>
                <HashLink smooth to={divHash} ><button>戻る</button></HashLink>
              );
            } else {
              return (
                <Link to="/" ><button>戻る</button></Link>
              );
            }
          }
        )()}
      </p>
    </div>
  );
}
export default PictureDetail;