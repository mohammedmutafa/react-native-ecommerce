import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import EditUserAd from './EditUserAd';

import { postCollectionRef } from '../../utilities/DBReferences';

class EditUserAdContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sellerAdsList: [],
            isFetchingAdsDataFromFirestore: false
        }
    }

    async componentWillMount() {
        const { userID } = this.props;

        this.setState({
            isFetchingAdsDataFromFirestore: true
        });

        const { sellerAdsList } = this.state;
        let copySellerAdsList = [...sellerAdsList];

        //For order by issue refer this discussion : https://github.com/invertase/react-native-firebase/issues/568
        await postCollectionRef.where('ownerID', '==', userID).orderBy('updatedAt', 'desc').get()
            .then((snapshot) => {
                let dSArray = [];
                snapshot.forEach((doc) => {
                    const mergedObj = { ...doc.data(), ...{ postID: doc.id } };
                    dSArray.push(mergedObj);
                });
                copySellerAdsList = [...copySellerAdsList, ...dSArray];
            })
            .catch((err) => {
                //console.log('Error getting documents', err);
                this.setState({
                    isFetchingAdsDataFromFirestore: false
                });
            });

        this.setState({
            sellerAdsList: copySellerAdsList,
            isFetchingAdsDataFromFirestore: false
        });
    }

    onPressAdsCard = (item) => {
        const { navigation } = this.props;
        const {
            updatedAt,
            productPrice,
            productTitle,
            productDescription,
            selectedLocation,
            ownerID,
            //Images
            image_0,
            image_1,
            image_2,
            image_3,
            image_4,
            image_5,
            image_6,
            image_7
        } = item;
        let formatedDate = '';

        if (updatedAt) {
            Moment.locale('en');
            formatedDate = Moment(updatedAt).format("Do-MMM-YYYY");
        }

        const imageDataSource = [
            // { url: coverImageURL, index: 0 },
            { url: image_1, index: 1 },
            { url: image_2, index: 2 },
            { url: image_3, index: 3 },
            { url: image_4, index: 4 },
            { url: image_5, index: 5 },
            { url: image_6, index: 6 },
            { url: image_7, index: 7 }
        ];
        const filteredImageDataSource = [];

        for (const obj of imageDataSource) {
            if (obj && obj.url) {
                filteredImageDataSource.push(obj)
            }
        }

        navigation.navigate('GeneralProductDetails', {
            thumbnailURL: image_0,
            time: formatedDate,
            price: productPrice,
            title: productTitle,
            productDescription: productDescription,
            selectedLocation: selectedLocation,
            ownerID: ownerID,
            imageDataSource: filteredImageDataSource,
            //isNavigatedFromPublicProfile: true
        });

    }

    onPressUpdatePhotos = (item) => {
        const { navigation } = this.props;
        const {
            ownerID,
            postID
        } = item;

        navigation.navigate('UpdateAdPhotos', {
            item,
            postID,
            ownerID
        });
    }

    onPressEditAdDetails = (item) => {
        const { navigation } = this.props;
        const {
            ownerID,
            postID
        } = item;

        navigation.navigate('UpdateAdDetails', {
            postItem: item,
            postID,
            userID: ownerID,
            isForUpdatingAd: true
        });
    }

    render() {
        const { sellerAdsList, isFetchingAdsDataFromFirestore } = this.state;

        return (
            <EditUserAd
                sellerAdsList={sellerAdsList}
                isFetchingAdsDataFromFirestore={isFetchingAdsDataFromFirestore}
                onPressAdsCard={this.onPressAdsCard}
                onPressUpdatePhotos={this.onPressUpdatePhotos}
                onPressEditAdDetails={this.onPressEditAdDetails}
            />
        );
    }
}

EditUserAdContainer.propTypes = {
    navigation: PropTypes.object,
    sellerData: PropTypes.object,
    userID: PropTypes.string
};

export default EditUserAdContainer;
