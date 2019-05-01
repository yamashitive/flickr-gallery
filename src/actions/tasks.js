import React from 'react';
import { Link } from 'react-router-dom';

const flickrapikey = "Your Flickr API KEY";

// ActionCreator ----------------------------------------------------------------------------------------

// sync
export const initializePicture = (pictureTag) => {
  // console.log(pictureTag);

  return {
    type: 'INITIALIZE_PICTURE',
    payload: {
      pictureTag
    }
  };
};

export const addPicture = (pictureTag) => ({
  type: 'ADD_PICTURE',
  payload: {
    pictureTag
  }
});

export const initializePictureSRC = (pictureSRC) => ({
  type: 'INITIALIZE_PICTURESRC',
  payload: {
    pictureSRC
  }
});

export const addPictureSRC = (pictureSRC) => ({
  type: 'ADD_PICTURESRC',
  payload: {
    pictureSRC
  }
});

export const inputText = (text) => ({
  type: 'INPUT_TEXT',
  payload: {
    text
  }
});

export const changeIndex = (indexNum) => ({
  type: 'CHANGE_INDEX',
  payload: {
    indexNum
  }
});

export const changePlaceholder = (phText) => ({
  type: 'CHANGE_PLACEHOLDER',
  payload: {
    phText
  }
});

// async
export const reloadImages = (textInput) => {
  return async(dispatch, getState) => {
    await dispatch(changeIndex(2));

    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrapikey + '&tags=' + textInput + '&per_page=10&page=1&format=json&nojsoncallback=1')
    .then(response => {
      return response.json();
    })
    .then(j => {

      // 画像追加
      const picArray = makePicArray(j);
      dispatch(initializePicture(picArray));

      // 画像情報追加
      const srcObj = makePicSRCs(j);
      dispatch(initializePictureSRC(srcObj));

      // プレースホルダー変更
      const phText = "現在の検索ワード：" + textInput;
      dispatch(changePlaceholder(phText));

    })
  };
}

export const addImages = (textInput, pageIndex) => {
  return async(dispatch, getState) => {
    await changePageIndex(pageIndex, dispatch);

    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrapikey + '&tags=' + textInput + '&per_page=10&page=' + pageIndex + '&format=json&nojsoncallback=1')
    .then(response => {
      return response.json();
    })
    .then(j => {

      // 画像追加
      const addPicArray = makePicArray(j);
      dispatch(addPicture(addPicArray));

      // 画像情報追加
      const srcObj = makePicSRCs(j);
      dispatch(addPictureSRC(srcObj));
    })
  };
}

const makePicArray = (j) => {
  return (
    j.photos.photo.map((pic) => {
      const srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'_n.jpg';
      const picID = pic.id;
      const picURL = "/picture/" + pic.id;
      const divID = "id-" + pic.id;

      return(
        <div id={divID} key={picID}>
          <Link to={picURL}>
            <img alt="" src={srcPath} ></img>
          </Link>
        </div>
      )
    })
  )
}

const makePicSRCs = (j) => {
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

  return srcObj;
}

const changePageIndex = (pageIndex, dispatch) => {
  pageIndex++;
  dispatch(changeIndex(pageIndex));
}