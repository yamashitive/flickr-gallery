// InitialState ----------------------------------------------------------------------------------------
const initialState = {
  pictures: [],
  textInput: 'shibuya',
  pageIndex: 1,
}

// Reducer ----------------------------------------------------------------------------------------
export default function tasksReducer(state=initialState, action) {
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

    default:
      return state;
  }
}