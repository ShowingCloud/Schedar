import {connect} from 'react-redux';

import {
    closeShareProject
} from '../reducers/modals';

import ShareModalComponent from '../components/share-modal/share-modal.jsx';

const mapStateToProps = state => ({
    visible: state.modals.shareProject
});

const mapDispatchToProps = dispatch => ({
    onClose: () => {
        dispatch(closeShareProject());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShareModalComponent);
