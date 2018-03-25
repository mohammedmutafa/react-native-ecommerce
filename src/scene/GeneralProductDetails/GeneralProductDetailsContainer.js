import React, { Component } from 'react';

import GeneralProductDetails from './GeneralProductDetails';

class GeneralProductDetailsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPhotoViewerVisible: false
        };
    }
    componentDidMount() {
        // StatusBar.setHidden(true);
        //Temporary Solution .. need to hide for all app screen.
    }

    showPhotoViewer = () => {
        this.setState({ isPhotoViewerVisible: true });
    }

    hidePhotoViewer = () => {
        this.setState({ isPhotoViewerVisible: false });
    }

    render() {
        const { isPhotoViewerVisible } = this.state;

        return (
            <GeneralProductDetails
                isPhotoViewerVisible={isPhotoViewerVisible}
                showPhotoViewer={this.showPhotoViewer}
                hidePhotoViewer={this.hidePhotoViewer}
            />
        );
    }
}

export default GeneralProductDetailsContainer;
