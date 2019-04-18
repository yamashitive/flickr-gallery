import { connect } from 'react-redux';
import PictureDetail from '../components/PictureDetail';


function mapStateToProps({pictureSRC}) {
	return {
		pictureSRC
	};
}

export default connect(mapStateToProps)(PictureDetail);