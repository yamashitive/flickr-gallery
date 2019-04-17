import { connect } from 'react-redux';
import PictureDetail from '../components/PictureDetail';


function mapStateToProps({pictureSRC},props) {
	return {
		pictureSRC
	};
}

export default connect(mapStateToProps)(PictureDetail);