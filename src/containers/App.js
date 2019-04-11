import { connect } from 'react-redux';
import App from '../components/App';
import { initializePicture, addPicture, inputText, changeIndex } from '../actions/tasks';

function mapStateToProps({ pictures, textInput, pageIndex }) {
	return {
		pictures, textInput, pageIndex
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
		inputText(text) {
			dispatch(inputText(text));
		},
		changeIndex(indexNum) {
			dispatch(changeIndex(indexNum));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToPtops)(App);