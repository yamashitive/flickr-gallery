import { connect } from 'react-redux';
import PictureDetail from '../components/PictureDetail';


const mapStateToProps = ({pictureSRC}) => {
	return {
		pictureSRC
	};
}

export default connect(mapStateToProps)(PictureDetail);