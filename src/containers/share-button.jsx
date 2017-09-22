import {connect} from 'react-redux';

import {
    openShareProject
} from '../reducers/modals';

import ShareButtonComponent from '../components/share-button/share-button.jsx';

const mapStateToProps = state => ({
    shareProjectVisible: state.modals.shareProject
});

const mapDispatchToProps = dispatch => ({
    onShareProject: () => {
        dispatch(openShareProject());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareButtonComponent);
