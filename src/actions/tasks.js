// ActionCreator ----------------------------------------------------------------------------------------
export const initializePicture = (pictureTag) => ({
  type: 'INITIALIZE_PICTURE',
  payload: {
    pictureTag
  }
});

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

export const changePlaceholder = () => ({
  type: 'CHANGE_PLACEHOLDER'
});