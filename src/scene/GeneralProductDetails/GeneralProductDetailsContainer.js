import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GeneralProductDetails from './GeneralProductDetails';
import Categories from '../../styles/Categories';

import { userCollectionRef } from '../../utilities/DBReferences';

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
        let userRef = userCollectionRef.doc(`${ownerID}`);

        userRef.get()
            .then((doc) => {
                const { firstName, lastName, ownerID, phoneNumber, gender, address, email, profileImageURL } = doc.data();
                const sellerData = {
                    firstName,
                    lastName,
                    ownerID,
                    phoneNumber,
                    gender,
                    address,
                    email,
                    profileImageURL
                }

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

    onPressSellerAvatar = () => {
        const { navigation, isNavigatedFromPublicProfile } = this.props;
        const { sellerData } = this.state;
        const { ownerID } = sellerData;

        if (!ownerID || isNavigatedFromPublicProfile) {
            return;
        }

        navigation.navigate('ProfilePublic', {
            sellerData: sellerData
        });
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
                onPressSellerAvatar={this.onPressSellerAvatar}
                //FireStore
                sellerData={sellerData}
            />
        );
    }
}

GeneralProductDetailsContainer.propTypes = {
    navigation: PropTypes.object,
    thumbnailURL: PropTypes.string,
    time: PropTypes.string,
    title: PropTypes.string,
    details: PropTypes.string,
    price: PropTypes.number,
    location: PropTypes.string,
    ownerID: PropTypes.string,
    isNavigatedFromPublicProfile: PropTypes.bool
};

export default GeneralProductDetailsContainer;
