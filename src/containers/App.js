import { connect } from 'react-redux';
import App from '../components/App';
import { initializePicture, addPicture, initializePictureSRC, addPictureSRC, inputText, changeIndex, changePlaceholder } from '../actions/tasks';


function mapStateToProps({ pictures, textInput, pageIndex, placeholderText }) {
	return {
		pictures, textInput, pageIndex, placeholderText,
	};
}

function mapDispatchToPtops(dispatch) {
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
		}
	};
}

export default connect(mapStateToProps, mapDispatchToPtops)(App);