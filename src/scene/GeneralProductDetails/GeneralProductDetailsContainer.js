import React, { Component } from 'react';

import GeneralProductDetails from './GeneralProductDetails';
import Categories from '../../styles/Categories';

const { MainCategory } = Categories;

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

    photoViewerDataSource = () => {
        let modifiedDS = [];

        for (let obj of MainCategory) {
            let modifiedObj = { source: { uri: obj.thumbnail } }
            modifiedDS.push(modifiedObj)
        }

        return modifiedDS;
    }

    render() {
        const { isPhotoViewerVisible, clickedPhotoIndex } = this.state;
        const { thumbnailURL, time, title, details, price, location } = this.props;

        return (
            <GeneralProductDetails
                isPhotoViewerVisible={isPhotoViewerVisible}
                showPhotoViewer={this.showPhotoViewer}
                hidePhotoViewer={this.hidePhotoViewer}
                thumbnailURL={thumbnailURL}
                time={time}
                price={price}
                title={title}
                location={location}
                details={details}
                clickedPhotoIndex={clickedPhotoIndex}
                photoViewerDataSource={this.photoViewerDataSource()}
            />
        );
    }
}

export default GeneralProductDetailsContainer;
