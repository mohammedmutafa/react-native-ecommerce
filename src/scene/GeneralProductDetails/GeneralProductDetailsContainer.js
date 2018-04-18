import React, { Component } from 'react';

import GeneralProductDetails from './GeneralProductDetails';

class GeneralProductDetailsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPhotoViewerVisible: false,
            clickedPhotoIndex: 0
        };
    }

    showPhotoViewer = (index) => {
        this.setState({
            isPhotoViewerVisible: true,
            clickedPhotoIndex: index
        });
    }

    hidePhotoViewer = () => {
        this.setState({
            isPhotoViewerVisible: false
        });
    }

    render() {
        const { isPhotoViewerVisible, clickedPhotoIndex } = this.state;
        const { thumbnailURL, time, details, price } = this.props;

        return (
            <GeneralProductDetails
                isPhotoViewerVisible={isPhotoViewerVisible}
                showPhotoViewer={this.showPhotoViewer}
                hidePhotoViewer={this.hidePhotoViewer}
                thumbnailURL={thumbnailURL}
                time={time}
                price={price}
                details={details}
                clickedPhotoIndex={clickedPhotoIndex}
            />
        );
    }
}

export default GeneralProductDetailsContainer;
