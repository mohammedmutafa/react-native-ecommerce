import React, { Component } from 'react';
import firebase from 'react-native-firebase';

import GeneralProductDetails from './GeneralProductDetails';
import Categories from '../../styles/Categories';

const { MainCategory } = Categories;

class GeneralProductDetailsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPhotoViewerVisible: false,
            clickedPhotoIndex: 0,

            //FireStore
            sellerData: {}
        };
    }

    componentWillMount() {
        const { ownerID } = this.props;
        let userRef = firebase.firestore().collection('users').doc(`${ownerID}`);

        userRef.get()
            .then((doc) => {
                const { firstName, lastName, phoneNumber, gender, address, email } = doc.data();
                const sellerData = { firstName, lastName, phoneNumber, gender, address, email }

                this.setState({
                    sellerData
                });
            }).catch((err) => {
                //
            });
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
        const {
            isPhotoViewerVisible,
            clickedPhotoIndex,
            sellerData
        } = this.state;

        const {
            thumbnailURL,
            time,
            title,
            details,
            price,
            location
        } = this.props;

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
                //FireStore
                sellerData={sellerData}
            />
        );
    }
}

export default GeneralProductDetailsContainer;
