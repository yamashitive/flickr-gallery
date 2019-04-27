// InitialState ----------------------------------------------------------------------------------------
const initialState = {
  pictures: [],
  pictureSRC: {},
  textInput: 'shibuya',
  pageIndex: 1,
  placeholderText: 'shibuya',
}

// Reducer ----------------------------------------------------------------------------------------
const flickrGalleryReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE_PICTURE':
      return {
        ...state,
        pictures: action.payload.pictureTag
      };

    case 'ADD_PICTURE':
      return {
        ...state,
        pictures: state.pictures.concat([action.payload.pictureTag])
      };

    case 'INITIALIZE_PICTURESRC':
      return {
        ...state,
        pictureSRC: action.payload.pictureSRC
      };

    case 'ADD_PICTURESRC':
      const newSRC = Object.assign(state.pictureSRC, action.payload.pictureSRC);
      return {
        ...state,
        pictureSRC: newSRC
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

    case 'CHANGE_PLACEHOLDER':
      return {
        ...state,
        placeholderText: action.payload.phText
      };

    default:
      return state;
  }
}
export default flickrGalleryReducer;