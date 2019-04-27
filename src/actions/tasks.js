// import React from 'react';
// import { Link } from 'react-router-dom';


// ActionCreator ----------------------------------------------------------------------------------------

// sync
export const initializePicture = (pictureTag) => {
  console.log(pictureTag);

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
export const asyncInitializePicture = (pictureTag) => {
  return (dispatch) => {
    console.log(pictureTag);

    setTimeout(() => {
      dispatch(initializePicture(pictureTag));
    }, 1000);
  };
}

export const asyncAddPicture = (pictureTag) => {
};
