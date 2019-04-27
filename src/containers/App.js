import { connect } from 'react-redux';
import App from '../components/App';
import { initializePicture, addPicture, initializePictureSRC, addPictureSRC, inputText, changeIndex, changePlaceholder, asyncInitializePicture } from '../actions/tasks';


const mapStateToProps = ({ pictures, textInput, pageIndex, placeholderText }) => {
	return {
		pictures, textInput, pageIndex, placeholderText,
	};
}

const mapDispatchToPtops  = (dispatch) => {
	return {
		initializePicture(pictureTag) {
			dispatch(initializePicture(pictureTag));
		},
		addPicture(pictureTag) {
			dispatch(addPicture(pictureTag));
		},
		initializePictureSRC(pictureSRC) {
			dispatch(initializePictureSRC(pictureSRC));
		},
		addPictureSRC(pictureSRC) {
			dispatch(addPictureSRC(pictureSRC));
		},
		inputText(text) {
			dispatch(inputText(text));
		},
		changeIndex(indexNum) {
			dispatch(changeIndex(indexNum));
		},
		changePlaceholder(phText) {
			dispatch(changePlaceholder(phText));
		},
		asyncInitializePicture(inputText) {
			dispatch(asyncInitializePicture(inputText));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToPtops)(App);