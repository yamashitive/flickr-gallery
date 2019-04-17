import React from 'react';
import { Link } from 'react-router-dom';

// Conpornent ----------------------------------------------------------------------------------------
export default function PictureDetail(props) {

  var picID = props.match.params.id;
  var picInfo = props.pictureSRC[picID];

  var picSRC = picInfo['src'];
  var picTitle = picInfo['title'];

  return (
    <div className="App PictureDetail">
      <header>
        <h1 className="App-title">Flickr Gallery</h1>
        <h2></h2>
      </header>

      <div>
        <img src={picSRC} alt="{picTitle}" />
        <p>{picTitle}</p>
      </div>

      <p className="moreButton">
        <Link to="/" ><button>戻る</button></ Link>
      </p>
    </div>
  );
}